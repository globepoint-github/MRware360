import { NextRequest, NextResponse } from 'next/server';

/**
 * Global Login API
 * Integrates with https://auth.vrware.world/api/domain_login
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { member_id, member_pw } = body;

    // Validate required parameters
    if (!member_id || !member_pw) {
      return NextResponse.json(
        { success: false, error: '아이디와 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // External API Configuration
    const API_URL = 'https://auth.vrware.world/api/member_login';
    const DOMAIN = 'MRWARE';
    const SECRET_KEY = 'MRW_SECRET_KEY_2024_SECURE_007';

    // Prepare form data for external API
    const formData = new URLSearchParams();
    formData.append('member_id', member_id);
    formData.append('member_pw', member_pw);
    formData.append('domain', DOMAIN);
    formData.append('secret_key', SECRET_KEY);
    // Note: The external API docs mention 'secret_key' and password logic might be handled differently 
    // depending on the exact API spec, but based on the doc, 'domain_login' usually takes these.
    // Wait, the user said "send login info". Docs say 'member_id', 'domain', 'secret_key'.
    // DOES IT NOT TAKE A PASSWORD? 
    // re-reading VRWARE_API.md:
    // "1단계: 도메인 로그인 (POST /api/domain_login) ... member_id, domain, secret_key 전송 ... 응답: token"
    // "2단계: 토큰으로 자동 로그인"
    // "3단계: 라이선스 검증"
    //
    // Wait, usually login requires a password. 
    // Table 3.2 in VRWARE_API.md ONLY lists member_id, domain, secret_key. 
    // It seems this "Domain Login" trusts the source application (this generic provided secret key) 
    // OR it assumes 'member_id' acts as the identifier and the secret key authenticates the APPLICATION, not the user?
    //
    // HOWEVER, the user said "login info delivery and login processing".
    // "http://auth.vrware.world/api/member_login" was the ORIGINAL url user gave, but then pointed to docs.
    // The docs describe "Domain Login".
    // Let's look closely at VRWARE_API.md again.
    // "401 ... 인증 실패 (잘못된 토큰, 비밀번호 불일치)" - where is password used?
    // MAYBE the user expects us to check password LOCALLY? NO, user wants global login.
    //
    // Re-reading user request: "http://auth.vrware.world/api/member_login 으로 로그인 정보 전달하고"
    // User INITIALLY said `api/member_login`.
    // THEN pointed to `VRWARE_API.md` for "auth related details".
    // `VRWARE_API.md` lists `api/domain_login`.
    //
    // IF I stick to `api/domain_login`, there is NO password parameter in the docs.
    // This implies SSO where the *trust* is between the server and the auth server via the Secret Key, 
    // and perhaps the user is just identified by ID? 
    // OR, `api/member_login` EXISTS but is not in the markdown file I saw?
    //
    // Let's assume the Markdown file is the source of truth for the *method* but the user might have been loose with the URL.
    // BUT, if I implement `domain_login`, anyone who knows a user's email can log in as them if I don't check password?
    // That seems less likely for a "Login" page.
    //
    // Let's look at the standard practice for this specific user/project if possible.
    // Actually, maybe I should check if `password` IS expected.
    // The user's prompt: "http://auth.vrware.world/api/member_login 으로 로그인 정보 전달하고 로그인 처리 되면 다시 리턴 받아서 로그인 처리 할거야"
    // The previous plan I wrote said: "Forward `username` and `password`".
    // The docs for `domain_login` do NOT show password.
    //
    // <CRITICAL_DECISION>
    // I will implement `domain_login` as documented in `VRWARE_API.md` because the user explicitly pointed to it for details.
    // I will COMMENT clearly that I am following the doc which only requests member_id.
    // If the external API requires password, the doc is wrong, but I must follow the provided doc first.
    // Wait, if I don't send password, how is it a login?
    // Maybe `member_id` + `secret_key` IS the check (trusted app impersonating user).
    // Let's stick to the docs.
    //
    // EDIT: I will try to pass `password` as well just in case, or stick strictly to the doc?
    // Strict adherence to doc: `member_id`, `domain`, `secret_key`.
    //
    
    // Call external API
    let response;
    try {
      response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });
    } catch (fetchError: any) {
      console.error('External API fetch error:', fetchError);
      return NextResponse.json(
        { success: false, error: `External API connection failed: ${fetchError.message}` },
        { status: 502 }
      );
    }

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (jsonError) {
      console.error('JSON parse error. Response was:', responseText);
      return NextResponse.json(
        { 
          success: false, 
          error: `Invalid response from Auth Server (Status: ${response.status}). Response: ${responseText.substring(0, 100)}...` 
        },
        { status: 500 }
      );
    }

    if (data.status === 'successful' || data.success) { // Handle potential variations
      // Login successful
      // normalized user object
      const userData = data.data || {};
      
      // Attempt to find sso_links in various places
      const ssoLinks = data.sso_links || userData.sso_links || null;
      
      if (ssoLinks) {
          userData.sso_links = ssoLinks;
      }

      console.log('Login Success. SSO Links found:', ssoLinks ? 'Yes' : 'No'); // Debug log

      return NextResponse.json({
        success: true,
        token: data.token,
        user: userData,
        message: data.alert_message || '로그인 성공',
      });
    } else {
      // Login failed
      return NextResponse.json({
        success: false,
        error: data.alert_message || data.status_message || '로그인에 실패했습니다.',
        debug: data // Include full data for debugging
      }, { status: response.status !== 200 ? response.status : 401 });
    }

  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}
