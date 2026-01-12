"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section01 from '../app/section/sec01'
import Section02 from '../app/section/sec02'
import Section03 from '../app/section/sec03'
import Section04 from '../app/section/sec04'
import Section05 from '../app/section/sec05'
import Section06 from '../app/section/sec06'
import Section07 from '../app/section/sec07'
import Section08 from '../app/section/sec08'
import '../../i18n';

const Page = () => {
  const section01Ref = useRef<HTMLDivElement>(null)
  const section02Ref = useRef<HTMLDivElement>(null)
  const section03Ref = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Section 01 고정
    ScrollTrigger.create({
      trigger: section01Ref.current,
      start: 'top top',
      end: () => `+=${section01Ref.current!.offsetHeight + section02Ref.current!.offsetHeight}`,
      pin: true,
      pinSpacing: false,
    })

    // Section 02 고정 (스페이서 포함)
    ScrollTrigger.create({
      trigger: section02Ref.current,
      start: 'top top',
      end: () => `+=${section02Ref.current!.offsetHeight + (spacerRef.current?.offsetHeight || 0) + section03Ref.current!.offsetHeight}`,
      pin: true,
      pinSpacing: false,
    })

    // Section 03 고정
    ScrollTrigger.create({
      trigger: section03Ref.current,
      start: 'top top',
      end: () => `+=${section03Ref.current!.offsetHeight}`,
      pin: true,
      pinSpacing: true,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div>
      <div ref={section01Ref}
      style={{ position: 'relative', zIndex: 1 }}>
        <Section01 />
      </div>
      <div ref={section02Ref}
      style={{ position: 'relative', zIndex: 2 }}>
        <Section02 />
      </div>
      <div 
        ref={spacerRef}
        style={{ 
          height: '100vh', // 추가 스크롤 조절
          position: 'relative',
          zIndex: 2
        }}
      />
      <div ref={section03Ref}
      style={{ position: 'relative', zIndex: 3 }}>
        <Section03 />
      </div>
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
    </div>
  )
}

export default Page