import React from 'react';
import { Link } from 'react-router-dom';

// 회원가입 화면 레이아웃을 그대로 출력합니다.
export default function Register() {
  return (
    <div
      style={{
        width: 1280,
        height: 800,
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
        margin: '0 auto',
        fontFamily:
          'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", Arial, sans-serif',
      }}
    >
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          padding: '10px 18px',
          borderRadius: 999,
          border: '1px solid #d9d9d9',
          background: 'white',
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#111',
          zIndex: 1,
        }}
      >
        홈으로 돌아가기
      </Link>

      <div
        style={{
          width: 400,
          height: 607,
          left: 451,
          top: 96,
          position: 'absolute',
          background: 'rgba(78, 95, 208, 0.30)',
          borderRadius: 20,
        }}
      />

      <div
        style={{
          width: 329,
          height: 438,
          left: 486,
          top: 163,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <FormField label="이름" />
        <FormField label="전화번호" />
        <FormField label="이메일" />
        <FormField label="비밀번호" value="••••••••" />
      </div>

      <div
        style={{
          width: 295,
          height: 44,
          left: 491,
          top: 118,
          position: 'absolute',
          color: 'black',
          fontSize: 25,
          fontWeight: 700,
          lineHeight: '32px',
        }}
      >
        시스템 사용을 위해
        <br />
        정보를 입력해주세요.
      </div>

      <div
        style={{
          width: 320,
          height: 50,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 15,
          paddingBottom: 15,
          left: 491,
          top: 594,
          position: 'absolute',
          background: '#096BC7',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          가입하기
        </div>
      </div>
    </div>
  );
}

function FormField({ label, value = '' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
      }}
    >
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.85)',
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <div
        style={{
          width: 320,
          height: 50,
          padding: '15px 16px',
          background: '#F5F5F5',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        {value && (
          <div
            style={{
              color: '#888888',
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
}
