import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        width: 1280,
        height: 800,
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
        margin: '0 auto',
        fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 423,
          height: 95,
          left: 419,
          top: 198,
          position: 'absolute',
          textAlign: 'center',
          color: 'black',
          fontSize: 40,
          fontWeight: 300,
          lineHeight: '22px',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        SMARTSHIELD
      </div>

      <div
        style={{
          width: 498,
          height: 271,
          left: 384,
          top: 252,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 이메일 */}
        <div
          style={{
            width: 318,
            height: 91,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
          }}
        >
          <div
            style={{
              color: 'rgba(0, 0, 0, 0.85)',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            이메일
          </div>
          <div
            style={{
              width: 320,
              height: 50,
              padding: '15px 16px',
              background: '#F5F5F5',
              overflow: 'hidden',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: '#888888',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              이메일을 입력하세요
            </div>
          </div>
        </div>

        {/* 비밀번호 */}
        <div
          style={{
            width: 322,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
          }}
        >
          <div
            style={{
              color: 'rgba(0, 0, 0, 0.85)',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            비밀번호
          </div>
          <div
            style={{
              width: 320,
              height: 50,
              padding: '15px 16px',
              background: '#F5F5F5',
              overflow: 'hidden',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: '#888888',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              비밀번호를 입력하세요
            </div>
          </div>
        </div>
      </div>

      {/* 버튼/링크 영역 */}
      <div
        style={{
          width: 322,
          left: 472,
          top: 516,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: '100%',
            height: 50,
            padding: '15px 123px',
            background: '#096BC7',
            overflow: 'hidden',
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            로그인
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: '#888888',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            계정이 없으신가요?
          </div>
          <Link
            to="/register"
            style={{
              padding: '10px 18px',
              background: '#096BC7',
              borderRadius: 6,
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white',
              fontSize: 16,
              fontWeight: 600,
              display: 'inline-flex',
              border: 'none',
            }}
          >
            계정 등록
          </Link>
        </div>
      </div>

      {/* 히어로 카피 */}
      <div
        style={{
          left: 306,
          top: 237,
          position: 'absolute',
          width: 653,
          textAlign: 'center',
          color: 'black',
          fontSize: 18,
          fontWeight: 300,
          lineHeight: '22px',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        당신의 안전을 지켜주는 AI, SmartShield
      </div>

      <img
        style={{
          width: 183,
          height: 76,
          left: 22,
          top: 17,
          position: 'absolute',
        }}
        src="https://placehold.co/183x76"
        alt="SmartShield 로고"
      />
    </div>
  );
}
