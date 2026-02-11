/* ===================================
   독도 이야기 - Internationalization
   Korean / English bilingual support
   =================================== */

const translations = {
  ko: {
    nav: { title: '독도 이야기' },
    hero: {
      title: '독도',
      subtitle: '대한민국 동해의 아름다운 섬, 그 역사를 따라가다',
      scroll: '스크롤하여 탐험하기'
    },
    geo: {
      title: '지리적 개요',
      map: {
        korea: '대한민국',
        japan: '일본',
        ulleungdo: '울릉도',
        dokdo: '독도',
        oki: '오키 제도',
        sea: '동해 / East Sea'
      },
      fact1: {
        title: '두 개의 섬',
        text: '동도(East Islet, 높이 98.6m)와 서도(West Islet, 높이 168.5m) 및 89개의 부속 암초로 구성. 두 섬 사이 거리는 약 151m입니다.'
      },
      fact2: {
        title: '총 면적',
        text: '187,554 m² (약 46에이커). 동도 73,297 m², 서도 88,740 m². 두 섬 사이 좁은 수로로 분리되어 있습니다.'
      },
      fact3: {
        title: '화산섬 기원',
        text: '약 460만 년 전 해저 화산 활동으로 형성된 화산섬. 울릉도보다 약 200만 년 먼저 생성되었으며, 현재는 침식이 진행된 상태입니다.'
      },
      fact4: {
        title: '해양 생태계',
        text: '한류와 난류가 교차하는 조경수역에 위치하여, 괭이갈매기·바다제비·슴새 등 희귀 해조류와 다양한 해양생물이 서식하는 천연보호구역(천연기념물 제336호)입니다.'
      },
      fact5: {
        title: '기후',
        text: '연평균 기온 약 12°C, 연 강수량 약 1,324mm. 연중 흐린 날이 많고 안개가 잦으며, 겨울철 강한 북서풍의 영향을 받는 해양성 기후입니다.'
      },
      fact6: {
        title: '해저 지형',
        text: '수심 약 2,000m의 동해 해저에서 솟아오른 거대한 해산의 정상부에 해당합니다. 해수면 위로 드러난 부분은 전체 해산의 극히 일부에 불과합니다.'
      },
      fact7: {
        title: '현재 상태',
        text: '독도경비대(경찰) 약 40명이 상시 주둔하며, 등대·접안시설·헬기장을 운영 중입니다. 1991년부터 민간인 주민이 거주하고 있습니다.'
      },
      fact8: {
        title: '다양한 명칭',
        text: '독도(한국), 다케시마/竹島(일본), 리앙쿠르 암초/Liancourt Rocks(국제). 리앙쿠르는 1849년 이 섬을 발견한 프랑스 포경선의 이름입니다.'
      }
    },
    timeline: {
      title: '역사 연대기',
      coverSubtitle: '독도를 둘러싼 한·일 양국의 역사적 기록과 시각을 연대순으로 살펴봅니다.',
      scrollHint: '스크롤하여 탐색',
      legendKorea: '한국 측',
      legendJapan: '일본 측',
      legendBoth: '양측·국제',
      labelKorea: '한국 측 시각',
      labelJapan: '일본 측 시각',
      events: [
        {
          date: '512년', year: 512, side: 'korea', era: 'ancient',
          title: '우산국 복속',
          koreaView: {
            title: '독도 영유권의 역사적 출발점',
            text: '신라 지증왕 13년, 이사부가 우산국(울릉도·우산도 포함)을 복속시킴. 삼국사기에 기록. 우산국에 독도가 포함되어 한국 영유권의 역사적 기원이 됨.'
          },
          japanView: {
            title: '우산국의 범위에 대한 의문',
            text: '우산국이 울릉도만을 지칭하는지, 독도까지 포함하는지 역사적으로 불분명. 6세기 기록만으로 독도 영유권을 주장하기 어려움.'
          },
          image: null
        },
        {
          date: '1145년', year: 1145, side: 'korea', era: 'ancient',
          title: '삼국사기 편찬',
          koreaView: {
            title: '공식 역사서의 기록',
            text: '김부식이 편찬한 삼국사기에 512년 우산국 복속 사실이 공식 기록됨. 한국이 독도 영유권의 역사적 출발점으로 제시하는 핵심 문헌.'
          },
          japanView: {
            title: '독도와의 연관성 부족',
            text: '삼국사기의 우산국 관련 기록에 독도(다케시마)에 대한 구체적 언급이 없으며, 울릉도 복속 기록이 독도 영유권의 근거가 되기 어려움.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Samguk.JPG', alt: '삼국사기', caption: '삼국사기 원본', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1454년', year: 1454, side: 'korea', era: 'ancient',
          title: '세종실록지리지',
          koreaView: {
            title: '두 섬의 존재 확인',
            text: '"우산과 무릉 두 섬이 현의 동쪽 바다에 있다. 날씨가 맑으면 서로 바라볼 수 있다." 우산도가 독도를 가리키는 명백한 기록.'
          },
          japanView: {
            title: '지리적 기술의 불일치',
            text: '"맑은 날 서로 보인다"는 기술이 울릉도에서 독도까지의 실제 거리(약 87km)와 가시성 조건에 맞지 않음. 우산도가 울릉도 부속 섬일 가능성.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Veritable_Records_of_Sejong_Cover.jpg', alt: '세종실록', caption: '세종실록 표지', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1531년', year: 1531, side: 'korea', era: 'ancient',
          title: '신증동국여지승람',
          koreaView: {
            title: '관찬 지리서의 근거',
            text: '조선의 관찬 지리서로 우산도와 울릉도를 지도에 함께 표시. 조선이 독도의 존재를 인지하고 자국 영토로 관리했음을 보여주는 고문헌 근거.'
          },
          japanView: {
            title: '지도상 위치의 오류',
            text: '팔도총도에서 우산도가 울릉도의 서쪽(한반도 쪽)에 그려져 있어, 동남쪽에 위치한 독도와 일치하지 않음. 우산도가 독도인지 의문.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ulleungdo_and_Usando.jpg', alt: '팔도총도', caption: '팔도총도 - 울릉도와 우산도 (1530)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1618년', year: 1618, side: 'japan', era: 'edo',
          title: '오야·무라카와 도해면허',
          koreaView: {
            title: '외국 영토 인식의 증거',
            text: '"도해면허"는 외국 영토로의 항해에 발급하는 것으로, 막부가 울릉도를 일본 영토가 아닌 외국으로 인식했음을 오히려 증명.'
          },
          japanView: {
            title: '17세기 영유 활동의 근거',
            text: '에도 막부가 오야·무라카와 가문에 도해면허를 발급, 울릉도(다케시마) 및 마쓰시마(독도)를 경유지이자 어업 근거지로 활용. 17세기부터의 실효적 이용.'
          },
          image: null
        },
        {
          date: '1667년', year: 1667, side: 'japan', era: 'edo',
          title: '은주시청합기',
          koreaView: {
            title: '일본 영토 외 확인',
            text: '"일본의 서북 한계는 이 주(오키도)를 한도로 한다"는 기술은 울릉도와 독도가 일본 영토 밖에 있음을 일본인 스스로 확인한 것.'
          },
          japanView: {
            title: '독도 인지의 증거',
            text: '은주시청합기에 마쓰시마(독도)와 다케시마(울릉도)에 대한 상세한 기술이 있어, 17세기 일본이 독도의 존재와 위치를 정확히 인지하고 있었음을 증명.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Eunju2.jpg', alt: '은주시청합기 지도', caption: '은주시청합기 수록 지도 (1667)', credit: 'Wikimedia Commons, CC BY-SA 4.0' }
        },
        {
          date: '1693년', year: 1693, side: 'both', era: 'edo',
          title: '안용복 도일 & 울릉도쟁계',
          koreaView: {
            title: '영유권의 외교적 확인',
            text: '조선 어부 안용복이 일본에 건너가 울릉도·독도의 조선 영유권을 주장하고, 일본 측으로부터 확인을 받음. 조일 외교 분쟁의 계기.'
          },
          japanView: {
            title: '안용복 진술의 신빙성 문제',
            text: '안용복의 도일 경위와 일본 측과의 교섭 내용은 과장이 많으며, 조선 측 기록과 일본 측 기록이 상충. 공식 외교 문서로서의 가치가 낮음.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Old_Map_of_Liancourt_Rocks.jpg', alt: '17세기 울릉도·독도 항로도', caption: '오키 제도에서 울릉도·독도 항로를 보여주는 17세기 일본 지도', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1696년', year: 1696, side: 'both', era: 'edo',
          title: '울릉도 도해금지령',
          koreaView: {
            title: '조선 영유권 인정의 결정적 증거',
            text: '도쿠가와 막부가 일본 어민의 울릉도 도해를 공식 금지. 일본 정부가 울릉도·독도의 조선 영유권을 인정한 결정적 증거.'
          },
          japanView: {
            title: '울릉도에 한정된 금지',
            text: '도해금지령은 다케시마(울릉도)에 대한 것이며, 마쓰시마(독도)에 대한 도해는 금지하지 않음. 독도에 대한 일본의 영유 의사는 유지됨.'
          },
          image: null
        },
        {
          date: '1770년', year: 1770, side: 'korea', era: 'edo',
          title: '동국문헌비고',
          koreaView: {
            title: '우산도=독도의 결정적 기록',
            text: '"우산은 즉 왜인이 말하는 마쓰시마(松島)이다"라고 명시. 우산도가 독도임을 확인하는 가장 직접적인 기록.'
          },
          japanView: {
            title: '후대 주석의 정확성 의문',
            text: '동국문헌비고의 해당 기술은 편찬자의 주석이며, 원래 자료에 근거한 것인지 불분명. 후대의 해석이 역사적 사실을 입증하기 어려움.'
          },
          image: null
        },
        {
          date: '1877년', year: 1877, side: 'both', era: 'imperial',
          title: '태정관지령',
          koreaView: {
            title: '일본 최고기관의 영토 외 확인',
            text: '일본 최고 국가기관 태정관이 "울릉도와 그 외 1도는 일본과 관계없다"고 공식 결정. 일본 스스로 독도의 비일본 영토성을 확인한 가장 강력한 근거.'
          },
          japanView: {
            title: '"외 1도"의 해석 문제',
            text: '태정관 문서의 "그 외 1도"가 현재의 독도(다케시마)를 지칭하는지, 당시 지명 혼란(다케시마/마쓰시마의 혼용) 속에서 다른 섬일 가능성도 있음.'
          },
          image: null
        },
        {
          date: '1900년', year: 1900, side: 'korea', era: 'imperial',
          title: '대한제국 칙령 제41호',
          koreaView: {
            title: '1905년 이전의 공식 관할',
            text: '울도군을 설치하고 관할에 "석도(石島)"를 포함. 석도는 독도의 당시 명칭이며, 일본의 1905년 편입 이전에 한국이 독도를 공식적으로 관할한 증거.'
          },
          japanView: {
            title: '"석도=독도" 근거 불충분',
            text: '"석도"가 독도를 지칭한다는 직접적 증거가 부족. 석도(石島)와 독도(獨島)의 발음·표기상 연관성이 불분명하며, 당시 울릉도 주민이 독도를 실제로 관할했다는 기록도 없음.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Royal_Decree_No.41.jpg', alt: '대한제국 칙령 제41호', caption: '대한제국 칙령 제41호 원본 (1900)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1905년', year: 1905, side: 'japan', era: 'imperial',
          title: '시마네현 편입',
          koreaView: {
            title: '한반도 침탈의 일환',
            text: '을사조약(1905.11) 직전인 1905년 1월에 이루어진 편입은 한반도 침탈 과정의 일환. 독도는 무주지가 아니라 이미 한국의 영토였으므로 불법 강탈.'
          },
          japanView: {
            title: '국제법상 합법적 편입',
            text: '일본 각의 결정으로 무주지(terra nullius)인 다케시마를 국제법 원칙에 따라 합법적으로 시마네현에 편입. 한반도 병합(1910)과는 별개의 독립적 조치.'
          },
          image: null
        },
        {
          date: '1906년', year: 1906, side: 'korea', era: 'imperial',
          title: '심흥택 보고서',
          koreaView: {
            title: '즉각적 항의와 독도 인식',
            text: '울도군수 심흥택이 일본의 독도 편입을 알고 즉각 중앙 정부에 보고. 대한제국이 항의했으나 을사조약으로 외교권이 박탈된 상태.'
          },
          japanView: {
            title: '실효적 대응 부재',
            text: '대한제국의 항의는 이미 외교권을 상실한 상태에서의 형식적 반응이며, 편입에 대한 구체적인 법적 이의 제기나 국제적 항의는 이루어지지 않음.'
          },
          image: null
        },
        {
          date: '1945년', year: 1945, side: 'both', era: 'modern',
          title: '일본 패전',
          koreaView: {
            title: '식민지 영토의 반환',
            text: '일본의 무조건 항복과 포츠담 선언 수락. 카이로 선언(1943)에서 "폭력과 탐욕에 의해 탈취한 모든 지역"의 반환을 규정, 독도도 이에 해당.'
          },
          japanView: {
            title: '전후 영토 처리의 시작',
            text: '포츠담 선언에 따라 일본의 주권은 본토 4도와 연합국이 결정하는 도서로 한정. 다케시마의 최종 귀속은 강화조약에서 결정될 사안.'
          },
          image: null
        },
        {
          date: '1946년', year: 1946, side: 'both', era: 'modern',
          title: 'SCAPIN 677',
          koreaView: {
            title: '독도의 일본 행정권 제외',
            text: '연합군 최고사령부가 독도를 일본의 행정권에서 명시적으로 제외. 전후 처리에서 독도가 한국 영토로 인정된 증거.'
          },
          japanView: {
            title: '잠정 행정조치에 불과',
            text: 'SCAPIN 677은 "영토의 최종 결정이 아님"이라는 단서를 명시. 점령기의 잠정적 행정조치이며, 영토 주권의 최종 결정은 강화조약에 위임.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/SCAPIN_677_lq.jpg', alt: 'SCAPIN 677 행정구역 지도', caption: 'SCAPIN 677에 따른 일본 행정구역 지도 (1946)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1951년', year: 1951, side: 'both', era: 'modern',
          title: 'SF 강화조약 & 러스크 서한',
          koreaView: {
            title: '독도 미언급은 누락',
            text: '샌프란시스코 강화조약에서 독도가 포기 영토에 포함되지 않은 것은 단순 누락. SCAPIN 677로 이미 독도가 한국 영토임이 확인되었으므로 별도 명시 불필요.'
          },
          japanView: {
            title: '포기 대상 제외 = 일본 영토',
            text: '조약 제2조에서 포기 영토로 제주도·거문도·울릉도를 명시했으나 독도는 제외. 러스크 서한에서 미국도 "독도는 한국 영토로 취급된 적 없다"고 확인.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Treaty_of_peace_with_japan.jpg', alt: '샌프란시스코 강화조약 서명', caption: '딘 애치슨 미 국무장관의 강화조약 서명 (1951)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1952년', year: 1952, side: 'korea', era: 'modern',
          title: '이승만 라인 선포',
          koreaView: {
            title: '주권적 권리의 행사',
            text: '대한민국이 "평화선"을 선포하여 독도를 한국 측 수역에 포함. 국제법상 인접 해양에 대한 주권적 권리 행사이며, 독도 실효적 지배의 본격적 시작.'
          },
          japanView: {
            title: '국제법 위반의 일방적 선언',
            text: '이승만 라인은 공해상의 일방적 관할권 주장으로 국제법에 위배. 독도에 대한 한국의 불법 점거가 시작된 기점.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Syngman_Rhee_Line_map.jpg', alt: '이승만 라인 지도', caption: '평화선(이승만 라인) 공식 지도 (1952)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1953년', year: 1953, side: 'korea', era: 'modern',
          title: '독도의용수비대',
          koreaView: {
            title: '독도 수호의 상징',
            text: '민간인 33명으로 구성된 의용수비대가 독도에 주둔. 1956년 경찰에 임무를 인계할 때까지 독도를 수비. 국민적 독도 수호 의지의 상징.'
          },
          japanView: {
            title: '무력 점거의 증거',
            text: '한국 민간인의 무장 주둔은 평화적 영토 관리가 아닌 무력에 의한 점거. 일본 어민과 해상보안청 순시선에 대한 발포 사건도 발생.'
          },
          image: null
        },
        {
          date: '1954년', year: 1954, side: 'japan', era: 'modern',
          title: '1차 ICJ 제소 제안',
          koreaView: {
            title: '분쟁 자체가 존재하지 않음',
            text: '독도는 분쟁 대상이 아닌 한국 고유의 영토. ICJ 회부는 독도를 분쟁 지역으로 격상시키려는 일본의 전략이므로 거부.'
          },
          japanView: {
            title: '국제법적 평화적 해결',
            text: '일본은 독도 문제를 국제사법재판소(ICJ)에 회부하여 국제법에 따른 평화적 해결을 추구. 한국의 거부는 법적 근거에 대한 자신감 부족을 시사.'
          },
          image: null
        },
        {
          date: '1965년', year: 1965, side: 'both', era: 'modern',
          title: '한일기본조약',
          koreaView: {
            title: '독도는 협상 대상이 아님',
            text: '한일 국교 정상화 과정에서 독도 문제는 의제로 다루어지지 않음. 독도는 한국의 고유 영토이므로 협상 대상 자체가 될 수 없다는 입장.'
          },
          japanView: {
            title: '미해결 상태로 유보',
            text: '국교 정상화를 위해 독도 문제를 미해결 상태로 남겨두기로 합의. "분쟁은 외교로 해결"이라는 포괄 조항에 포함.'
          },
          image: null
        },
        {
          date: '2005년', year: 2005, side: 'japan', era: 'contemporary',
          title: '다케시마의 날 제정',
          koreaView: {
            title: '역사 왜곡과 도발',
            text: '시마네현의 "다케시마의 날" 제정은 일본의 독도 침탈 역사를 미화하는 도발적 행위. 한국 정부와 국민이 강력히 반발하며 외교 갈등 심화.'
          },
          japanView: {
            title: '영유권 주장의 표현',
            text: '1905년 각의 결정에 의한 시마네현 편입 100주년을 기념하여 2월 22일을 "다케시마의 날"로 제정. 일본의 정당한 영유권 주장의 평화적 표현.'
          },
          image: null
        },
        {
          date: '2012년', year: 2012, side: 'both', era: 'contemporary',
          title: '이명박 독도 방문 & 3차 ICJ 제안',
          koreaView: {
            title: '대통령의 주권 확인',
            text: '대한민국 대통령으로서 최초로 독도를 방문. 독도에 대한 한국의 확고한 영토 주권을 국내외에 선언한 역사적 행보.'
          },
          japanView: {
            title: 'ICJ를 통한 해결 재촉구',
            text: '한국 대통령의 독도 방문을 도발로 규정. 일본은 3차 ICJ 제소를 제안하여 국제법적 해결을 다시 촉구했으나 한국이 거부. 한일 관계 크게 경색.'
          },
          image: null
        }
      ]
    },
    korea: {
      title: '한국의 입장',
      subtitle: '대한민국 정부가 주장하는 독도 영유권의 근거',
      claims: [
        {
          title: '역사적 선점',
          text: '512년 신라의 우산국 복속 이래, 조선시대 관찬 기록(세종실록지리지, 동국여지승람 등)에 우산도가 지속적으로 등장합니다. 이는 한국이 일본보다 수 세기 앞서 독도를 인지하고 영유해왔음을 보여줍니다.'
        },
        {
          title: '안용복의 외교 활동 (1693~1696)',
          text: '조선 어부 안용복은 일본에 건너가 울릉도와 독도가 조선의 영토임을 주장했고, 이후 도쿠가와 막부는 일본 어민의 울릉도 도해를 금지하는 조치를 취했습니다. 이는 당시 일본 정부도 이 섬들의 조선 영유권을 인정한 것이라고 한국은 주장합니다.'
        },
        {
          title: '태정관지령 (1877)',
          text: '일본의 최고 국가기관이었던 태정관이 "울릉도와 그 외 1도는 일본과 관계없다"고 공식 결정했습니다. 한국 측은 "그 외 1도"가 독도를 지칭한다고 주장하며, 이는 일본 스스로가 독도의 비일본 영토성을 확인한 것이라고 봅니다.'
        },
        {
          title: '대한제국 칙령 제41호 (1900)',
          text: '대한제국이 울도군을 설치하면서 관할에 "석도(石島)"를 포함시켰습니다. 한국 측은 석도가 독도의 당시 명칭이라고 주장하며, 이는 일본의 1905년 편입 이전에 한국이 이미 독도를 공식적으로 관할하고 있었음을 보여준다고 합니다.'
        },
        {
          title: '실효적 지배 (1952~현재)',
          text: '대한민국은 1952년 이래 독도에 경비대를 주둔시키고, 등대·접안시설 등을 건설하며, 민간인 거주를 허용하는 등 지속적이고 평화적인 실효적 지배를 행사하고 있습니다.'
        },
        {
          title: 'SCAPIN 677 (1946)',
          text: '제2차 세계대전 종전 후 연합군 최고사령부가 발한 SCAPIN 677은 독도를 일본의 행정권에서 명시적으로 제외했습니다. 한국은 이를 전후 처리에서 독도가 한국 영토로 인정되었음을 보여주는 증거로 제시합니다.'
        }
      ]
    },
    japan: {
      title: '일본의 입장',
      subtitle: '일본 정부가 주장하는 다케시마 영유권의 근거',
      claims: [
        {
          title: '무주지 선점 (1905)',
          text: '일본 정부는 다케시마(독도)가 1905년 각의 결정 당시 어느 나라에도 속하지 않은 무주지(terra nullius)였으며, 국제법의 원칙에 따라 합법적으로 영토에 편입한 것이라고 주장합니다.'
        },
        {
          title: '17세기 어업 활동',
          text: '에도시대 오야(大谷)가문과 무라카와(村川)가문이 막부의 허가를 받아 울릉도로 향하는 도중 다케시마를 중간 기항지이자 어업 근거지로 이용했다고 주장합니다. 이는 일본이 17세기부터 다케시마를 실질적으로 활용했음을 보여준다고 합니다.'
        },
        {
          title: '샌프란시스코 강화조약 (1951)',
          text: '조약 제2조에서 일본이 포기할 영토로 제주도·거문도·울릉도를 명시했지만, 다케시마는 포기 대상에 포함되지 않았습니다. 일본은 이를 연합국이 다케시마를 일본 영토로 인정한 것으로 해석합니다.'
        },
        {
          title: '러스크 서한 (1951)',
          text: '미국 국무부 차관보 딘 러스크가 한국 대사에게 보낸 서한에서 "독도는 한국의 영토로 취급된 적이 없으며 1905년경부터 시마네현 관할하에 있었다"고 밝혔습니다. 일본은 이를 미국의 공식 입장으로 중시합니다.'
        },
        {
          title: 'ICJ 회부 제안',
          text: '일본은 이 분쟁을 국제사법재판소(ICJ)에 세 차례(1954, 1962, 2012) 회부하자고 제안했으나 한국이 모두 거부했습니다. 일본은 국제법적 해결을 추구한다는 입장이며, 한국의 거부를 법적 자신감의 부재로 해석합니다.'
        },
        {
          title: '행정적 조치',
          text: '1905년 편입 이후 시마네현이 다케시마를 정식 등록하고, 강치(바다사자) 포획 허가를 발급하며, 측량을 실시하는 등의 행정적 관할 행위를 수행했다고 주장합니다.'
        }
      ]
    },
    law: {
      title: '국제법적 관점',
      table: {
        headers: ['쟁점', '한국의 입장', '일본의 입장'],
        rows: [
          [
            '역사적 권원',
            '512년 이래 지속적으로 독도를 인지·관할해왔으며, 다수의 고문헌과 고지도가 이를 뒷받침',
            '한국의 고문헌에 등장하는 "우산도"가 독도를 지칭하는지 불분명하며, 역사적 권원은 입증되지 않음'
          ],
          [
            '1905년 편입의 합법성',
            '일본의 한반도 침탈 과정의 일부이며, 무주지 선점이 아닌 이미 한국 영토였던 독도의 불법 강탈',
            '무주지를 국제법 원칙에 따라 합법적으로 편입한 것이며, 한반도 병합(1910)과는 별개의 조치'
          ],
          [
            'SF 강화조약 해석',
            '독도가 포기 대상에서 빠진 것은 단순한 누락이며, SCAPIN 677 등을 통해 독도가 한국 영토임이 이미 확인됨',
            '독도가 일본 포기 영토에서 제외된 것은 독도가 일본 영토라는 연합국의 인식을 반영'
          ],
          [
            '실효적 지배',
            '1952년 이래 70년 이상 평화적·지속적으로 실효적 지배를 행사 중',
            '한국의 점유는 1952년 이승만 라인에 의한 불법 점거이며, 일본의 지속적인 항의가 있으므로 묵인(acquiescence)이 성립하지 않음'
          ],
          [
            '국제재판',
            '독도는 분쟁 자체가 존재하지 않는 한국 고유의 영토이므로 ICJ 회부 필요가 없음',
            '국제법에 의한 평화적 해결을 추구하며, 한국의 ICJ 거부는 법적 근거의 취약성을 시사'
          ]
        ]
      },
      principles: [
        {
          title: '실효적 지배 (Effective Occupation)',
          text: '국제법에서 영토 주권을 입증하는 핵심 기준 중 하나입니다. 한국은 70년 이상 독도에 대한 실효적 지배를 행사하고 있으나, 일본은 이를 불법 점거로 규정하며 지속적으로 항의하고 있습니다.'
        },
        {
          title: '결정적 기일 (Critical Date)',
          text: '영토 분쟁에서 어느 시점의 상황을 기준으로 판단할 것인가의 문제입니다. 1905년, 1945년, 1952년 중 어느 시점을 결정적 기일로 보느냐에 따라 양측에 유불리가 달라집니다.'
        },
        {
          title: '무주지 선점 (Terra Nullius)',
          text: '일본은 1905년 독도가 무주지였다고 주장하지만, 한국은 이미 역사적으로 영유권을 행사하고 있었으므로 무주지가 아니었다고 반박합니다.'
        },
        {
          title: '조약 해석',
          text: '1951년 샌프란시스코 강화조약에서 독도가 명시되지 않은 것은 양측 모두에게 해석의 여지를 남기며, 이 모호성이 분쟁의 핵심 원인 중 하나입니다.'
        }
      ]
    },
    conclusion: {
      line1: '독도를 둘러싼 한일 간의 영유권 분쟁은 단순한 영토 문제를 넘어, 역사 인식과 국제법 해석의 복합적 갈등입니다.',
      line2: '양국의 주장을 객관적으로 이해하는 것은 평화로운 해결을 향한 첫걸음입니다.',
      line3: '역사적 사실에 기반한 대화와 상호 존중만이 동북아시아의 지속 가능한 평화를 만들어갈 수 있습니다.',
      sourcesTitle: '참고 자료',
      source5: '태정관지령 (太政官指令, 1877)',
      source6: '대한제국 칙령 제41호 (1900)'
    },
    footer: {
      text: '이 웹사이트는 교육 목적으로 제작되었으며, 양측의 관점을 객관적으로 전달하고자 합니다.'
    },
    dots: ['시작', '지리', '연대기', '한국', '일본', '국제법', '결론']
  },

  en: {
    nav: { title: 'Dokdo Iyagi' },
    hero: {
      title: 'Dokdo',
      subtitle: 'The Beautiful Islands of Korea\'s East Sea — A Journey Through History',
      scroll: 'Scroll to explore'
    },
    geo: {
      title: 'Geographic Overview',
      map: {
        korea: 'South Korea',
        japan: 'Japan',
        ulleungdo: 'Ulleungdo',
        dokdo: 'Dokdo',
        oki: 'Oki Islands',
        sea: 'East Sea / Sea of Japan'
      },
      fact1: {
        title: 'Two Islets',
        text: 'Composed of East Islet (Dongdo, 98.6m tall) and West Islet (Seodo, 168.5m tall), along with 89 surrounding rocks. The two main islets are about 151m apart.'
      },
      fact2: {
        title: 'Total Area',
        text: '187,554 m² (~46 acres). East Islet: 73,297 m², West Islet: 88,740 m². Separated by a narrow channel approximately 151 meters wide.'
      },
      fact3: {
        title: 'Volcanic Origin',
        text: 'Formed approximately 4.6 million years ago by submarine volcanic activity — about 2 million years before Ulleungdo. Now in an advanced state of erosion.'
      },
      fact4: {
        title: 'Marine Ecosystem',
        text: 'Located where warm and cold ocean currents converge, Dokdo hosts rare seabirds (black-tailed gulls, swinhoe\'s storm petrels) and diverse marine life. Designated Natural Monument No. 336.'
      },
      fact5: {
        title: 'Climate',
        text: 'Average annual temperature of ~12\u00B0C with ~1,324mm of rainfall. Frequent fog, overcast skies, and strong northwest winter monsoon winds — a typical oceanic climate.'
      },
      fact6: {
        title: 'Undersea Terrain',
        text: 'Dokdo is the summit of a massive seamount rising from the East Sea floor at approximately 2,000m depth. Only a tiny fraction of the overall volcanic structure is visible above sea level.'
      },
      fact7: {
        title: 'Current Status',
        text: 'Approximately 40 Korean coast guard police are permanently stationed on Dokdo. Facilities include a lighthouse, dock, and helipad. A civilian resident has lived on the island since 1991.'
      },
      fact8: {
        title: 'Multiple Names',
        text: 'Dokdo (Korea), Takeshima/\u7AF9\u5CF6 (Japan), Liancourt Rocks (international). The name "Liancourt" comes from the French whaling ship that spotted the rocks in 1849.'
      }
    },
    timeline: {
      title: 'Historical Timeline',
      coverSubtitle: 'A chronological look at historical records and perspectives from Korea and Japan regarding Dokdo.',
      scrollHint: 'Scroll to explore',
      legendKorea: 'Korean Side',
      legendJapan: 'Japanese Side',
      legendBoth: 'Both / International',
      labelKorea: 'Korean Perspective',
      labelJapan: 'Japanese Perspective',
      events: [
        {
          date: '512 AD', year: 512, side: 'korea', era: 'ancient',
          title: 'Subjugation of Usan-guk',
          koreaView: {
            title: 'Historical origin of sovereignty',
            text: 'Under King Jijeung of Silla, General Isabu subjugated Usan-guk (including Ulleungdo and Usando). Recorded in the Samguk Sagi. Dokdo was part of Usan-guk, marking the start of Korean sovereignty.'
          },
          japanView: {
            title: 'Scope of Usan-guk unclear',
            text: 'Whether Usan-guk referred only to Ulleungdo or also included Dokdo is historically uncertain. A 6th-century record alone is insufficient to claim sovereignty over Dokdo.'
          },
          image: null
        },
        {
          date: '1145', year: 1145, side: 'korea', era: 'ancient',
          title: 'Samguk Sagi Compilation',
          koreaView: {
            title: 'Official historical record',
            text: 'The Samguk Sagi, compiled by Kim Busik, officially records the subjugation of Usan-guk in 512 AD. A key document Korea presents as the historical basis of its Dokdo sovereignty.'
          },
          japanView: {
            title: 'No direct link to Dokdo',
            text: 'The Samguk Sagi\'s Usan-guk records contain no specific mention of Dokdo (Takeshima). Records of Ulleungdo\'s subjugation cannot serve as grounds for Dokdo sovereignty.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Samguk.JPG', alt: 'Samguk Sagi', caption: 'Original Samguk Sagi manuscript', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1454', year: 1454, side: 'korea', era: 'ancient',
          title: 'Sejong Sillok Jiriji',
          koreaView: {
            title: 'Confirmation of two islands',
            text: '"The two islands of Usan and Mureung are in the sea east of the county. On clear days, they can be seen from each other." Clear evidence that Usando (Dokdo) was recognized as Korean territory.'
          },
          japanView: {
            title: 'Geographic description mismatch',
            text: 'The claim that the islands "can be seen from each other on clear days" is inconsistent with the actual distance between Ulleungdo and Dokdo (~87km). Usando may refer to a nearby islet of Ulleungdo.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Veritable_Records_of_Sejong_Cover.jpg', alt: 'Sejong Sillok', caption: 'Cover of the Veritable Records of King Sejong', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1531', year: 1531, side: 'korea', era: 'ancient',
          title: 'Sinjeung Dongguk Yeoji Seungnam',
          koreaView: {
            title: 'Official geographic atlas',
            text: 'An official Joseon geographic encyclopedia that maps both Usando and Ulleungdo, demonstrating Joseon\'s awareness and administrative control of Dokdo.'
          },
          japanView: {
            title: 'Map placement error',
            text: 'In the Paldo Chongdo map, Usando is drawn west of Ulleungdo (toward the Korean peninsula), inconsistent with Dokdo\'s actual position to the southeast. The identification of Usando as Dokdo is questionable.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ulleungdo_and_Usando.jpg', alt: 'Paldo Chongdo map', caption: 'Map of the Eight Provinces showing Ulleungdo and Usando (1530)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1618', year: 1618, side: 'japan', era: 'edo',
          title: 'Oya-Murakawa Passage License',
          koreaView: {
            title: 'Evidence of foreign territory recognition',
            text: 'A "passage license" (tokai menkyo) was issued for travel to foreign territories. Its very existence proves the Shogunate recognized Ulleungdo as foreign (non-Japanese) territory.'
          },
          japanView: {
            title: '17th-century territorial activity',
            text: 'The Edo Shogunate granted the Oya and Murakawa families licenses to sail to Ulleungdo (Takeshima) and Matsushima (Dokdo), using them as fishing bases. Evidence of effective utilization since the 17th century.'
          },
          image: null
        },
        {
          date: '1667', year: 1667, side: 'japan', era: 'edo',
          title: 'Onshu Shicho Goki',
          koreaView: {
            title: 'Japan\'s own boundary admission',
            text: 'The statement "the northwest boundary of Japan ends at this province (Oki Islands)" confirms that Ulleungdo and Dokdo lay outside Japanese territory — acknowledged by a Japanese author.'
          },
          japanView: {
            title: 'Evidence of Dokdo awareness',
            text: 'The Onshu Shicho Goki contains detailed descriptions of Matsushima (Dokdo) and Takeshima (Ulleungdo), proving that Japan accurately knew Dokdo\'s existence and location in the 17th century.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Eunju2.jpg', alt: 'Onshu Shicho Goki map', caption: 'Map from the Onshu Shicho Goki (1667)', credit: 'Wikimedia Commons, CC BY-SA 4.0' }
        },
        {
          date: '1693', year: 1693, side: 'both', era: 'edo',
          title: 'An Yong-bok\'s Visit & Ulleungdo Dispute',
          koreaView: {
            title: 'Diplomatic confirmation of sovereignty',
            text: 'Korean fisherman An Yong-bok traveled to Japan asserting Joseon sovereignty over Ulleungdo and Dokdo, receiving acknowledgment from Japanese officials. Triggered the Ulleungdo Dispute.'
          },
          japanView: {
            title: 'Unreliable testimony',
            text: 'An Yong-bok\'s accounts of his journey and Japanese negotiations are exaggerated and inconsistent with Japanese records. His testimony lacks credibility as official diplomatic documentation.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Old_Map_of_Liancourt_Rocks.jpg', alt: '17th century route map', caption: '17th century Japanese map showing the route from Oki Islands to Ulleungdo and Dokdo', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1696', year: 1696, side: 'both', era: 'edo',
          title: 'Ulleungdo Passage Ban',
          koreaView: {
            title: 'Japan\'s recognition of Korean sovereignty',
            text: 'The Tokugawa Shogunate officially banned Japanese fishermen from traveling to Ulleungdo. Decisive evidence that Japan recognized Joseon\'s sovereignty over both Ulleungdo and Dokdo.'
          },
          japanView: {
            title: 'Ban limited to Ulleungdo only',
            text: 'The passage ban applied to Takeshima (Ulleungdo), not Matsushima (Dokdo). Japan\'s claim to Dokdo was maintained, as no prohibition was placed on travel to the islets.'
          },
          image: null
        },
        {
          date: '1770', year: 1770, side: 'korea', era: 'edo',
          title: 'Dongguk Munheon Bigo',
          koreaView: {
            title: 'Definitive identification: Usando = Dokdo',
            text: '"Usan is what the Japanese call Matsushima (松島)." The most direct historical record confirming that Usando refers to Dokdo.'
          },
          japanView: {
            title: 'Questionable later annotation',
            text: 'This statement is a compiler\'s annotation, not from original source material. Whether this later interpretation accurately reflects historical fact is debatable.'
          },
          image: null
        },
        {
          date: '1877', year: 1877, side: 'both', era: 'imperial',
          title: 'Dajokan Order',
          koreaView: {
            title: 'Japan\'s own government confirms exclusion',
            text: 'Japan\'s highest governmental body officially determined that "Ulleungdo and one other island are not related to Japan." The strongest evidence, from Japan\'s own records, confirming Dokdo is not Japanese territory.'
          },
          japanView: {
            title: 'Identity of "one other island" disputed',
            text: 'Whether "one other island" in the Dajokan document refers to present-day Dokdo (Takeshima) is uncertain. Name confusion between Takeshima and Matsushima at the time may mean a different island was intended.'
          },
          image: null
        },
        {
          date: '1900', year: 1900, side: 'korea', era: 'imperial',
          title: 'Korean Imperial Edict No. 41',
          koreaView: {
            title: 'Official administration before 1905',
            text: 'The Korean Empire established Uldo County with jurisdiction including "Seokdo (石島)." Seokdo is Dokdo\'s name at the time, proving Korean administration before Japan\'s 1905 incorporation.'
          },
          japanView: {
            title: 'Insufficient evidence for "Seokdo = Dokdo"',
            text: 'There is no direct evidence that "Seokdo" refers to Dokdo. The phonetic and written connection between Seokdo (石島) and Dokdo (獨島) is unclear, and no records show Uldo County actually administered Dokdo.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Royal_Decree_No.41.jpg', alt: 'Korean Imperial Edict No. 41', caption: 'Original Korean Imperial Edict No. 41 (1900)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1905', year: 1905, side: 'japan', era: 'imperial',
          title: 'Shimane Prefecture Incorporation',
          koreaView: {
            title: 'Part of imperial aggression',
            text: 'The incorporation in January 1905 — just months before the Eulsa Treaty stripped Korea\'s diplomatic rights — was part of Japan\'s imperial aggression. Dokdo was not terra nullius but already Korean territory; this was illegal seizure.'
          },
          japanView: {
            title: 'Legitimate incorporation under international law',
            text: 'Japan incorporated terra nullius Takeshima into Shimane Prefecture by Cabinet decision, following international law principles. This was independent of and separate from the 1910 annexation of Korea.'
          },
          image: null
        },
        {
          date: '1906', year: 1906, side: 'korea', era: 'imperial',
          title: 'Sim Heung-taek Report',
          koreaView: {
            title: 'Immediate protest and territorial awareness',
            text: 'Uldo County magistrate Sim Heung-taek discovered Japan\'s incorporation and immediately reported to the central government. The Korean Empire protested, but had already lost diplomatic rights under the Eulsa Treaty.'
          },
          japanView: {
            title: 'No effective response',
            text: 'The Korean Empire\'s protest was a formality from a state that had already lost diplomatic rights. No concrete legal challenge or international objection was raised against the incorporation.'
          },
          image: null
        },
        {
          date: '1945', year: 1945, side: 'both', era: 'modern',
          title: 'Japan\'s Surrender',
          koreaView: {
            title: 'Return of colonial territories',
            text: 'Japan\'s unconditional surrender and acceptance of the Potsdam Declaration. The Cairo Declaration (1943) stipulated the return of "all territories taken by violence and greed" — which includes Dokdo.'
          },
          japanView: {
            title: 'Start of post-war territorial settlement',
            text: 'Under the Potsdam Declaration, Japanese sovereignty was limited to the four main islands and such islands as the Allies determined. Takeshima\'s final disposition was to be decided by the peace treaty.'
          },
          image: null
        },
        {
          date: '1946', year: 1946, side: 'both', era: 'modern',
          title: 'SCAPIN 677',
          koreaView: {
            title: 'Dokdo excluded from Japan',
            text: 'The Allied Supreme Command explicitly excluded Dokdo from Japanese administrative authority. Evidence that the post-war settlement recognized Dokdo as Korean territory.'
          },
          japanView: {
            title: 'Merely a provisional measure',
            text: 'SCAPIN 677 explicitly stated it was "not a final determination of sovereignty." It was a temporary administrative measure during occupation; final sovereignty was deferred to the peace treaty.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/SCAPIN_677_lq.jpg', alt: 'SCAPIN 677 administrative map', caption: 'SCAP Administrative Areas map under SCAPIN 677 (1946)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1951', year: 1951, side: 'both', era: 'modern',
          title: 'SF Peace Treaty & Rusk Documents',
          koreaView: {
            title: 'Omission was not exclusion',
            text: 'Dokdo\'s absence from the list of renounced territories was a simple omission. SCAPIN 677 had already confirmed Dokdo as Korean territory, making separate mention unnecessary.'
          },
          japanView: {
            title: 'Not renounced = Japanese territory',
            text: 'Article 2 specifically listed territories Japan renounced (Jeju, Geomundo, Ulleungdo) but excluded Dokdo. The Rusk Documents confirm: the U.S. stated "Dokdo was never treated as part of Korea."'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Treaty_of_peace_with_japan.jpg', alt: 'San Francisco Peace Treaty signing', caption: 'Secretary of State Dean Acheson signing the Peace Treaty (1951)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1952', year: 1952, side: 'korea', era: 'modern',
          title: 'Syngman Rhee Line',
          koreaView: {
            title: 'Exercise of sovereign rights',
            text: 'South Korea declared the "Peace Line," placing Dokdo within Korean waters. A legitimate exercise of sovereign rights over adjacent maritime areas; the beginning of effective control over Dokdo.'
          },
          japanView: {
            title: 'Unilateral violation of international law',
            text: 'The Syngman Rhee Line was a unilateral claim of jurisdiction over international waters, violating international law. It marked the beginning of Korea\'s illegal occupation of Takeshima.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Syngman_Rhee_Line_map.jpg', alt: 'Syngman Rhee Line map', caption: 'Official Syngman Rhee Line (Peace Line) map (1952)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1953', year: 1953, side: 'korea', era: 'modern',
          title: 'Dokdo Volunteer Guards',
          koreaView: {
            title: 'Symbol of Dokdo protection',
            text: 'A civilian defense corps of 33 members stationed on Dokdo, guarding the islands until handing over to the Korean National Police in 1956. A symbol of the Korean people\'s commitment to protecting Dokdo.'
          },
          japanView: {
            title: 'Evidence of forceful occupation',
            text: 'The armed stationing of Korean civilians was not peaceful territorial management but forceful occupation. Firing incidents against Japanese fishermen and maritime patrol vessels occurred.'
          },
          image: null
        },
        {
          date: '1954', year: 1954, side: 'japan', era: 'modern',
          title: '1st ICJ Referral Proposal',
          koreaView: {
            title: 'No dispute exists to adjudicate',
            text: 'Dokdo is inherently Korean territory, not a subject of dispute. An ICJ referral is a Japanese strategy to elevate Dokdo to "disputed territory" status; Korea rightfully rejected it.'
          },
          japanView: {
            title: 'Seeking peaceful legal resolution',
            text: 'Japan proposed referring the dispute to the International Court of Justice for peaceful resolution under international law. Korea\'s rejection suggests a lack of confidence in its legal position.'
          },
          image: null
        },
        {
          date: '1965', year: 1965, side: 'both', era: 'modern',
          title: 'Treaty on Basic Relations',
          koreaView: {
            title: 'Dokdo was not a negotiation item',
            text: 'During Korea-Japan normalization, the Dokdo issue was not placed on the agenda. As inherent Korean territory, Dokdo cannot be a subject of negotiation.'
          },
          japanView: {
            title: 'Left unresolved by agreement',
            text: 'To achieve diplomatic normalization, both sides agreed to leave the Dokdo issue unresolved. It falls under the general clause that "disputes shall be settled through diplomacy."'
          },
          image: null
        },
        {
          date: '2005', year: 2005, side: 'japan', era: 'contemporary',
          title: 'Takeshima Day Established',
          koreaView: {
            title: 'Provocative historical distortion',
            text: 'Shimane Prefecture\'s "Takeshima Day" glorifies Japan\'s seizure of Dokdo. The Korean government and public strongly protested, deepening diplomatic tensions.'
          },
          japanView: {
            title: 'Peaceful expression of territorial claim',
            text: 'February 22 was designated "Takeshima Day" to commemorate the 100th anniversary of the 1905 Cabinet decision incorporating Takeshima into Shimane Prefecture. A peaceful expression of Japan\'s legitimate sovereignty claim.'
          },
          image: null
        },
        {
          date: '2012', year: 2012, side: 'both', era: 'contemporary',
          title: 'Presidential Visit & 3rd ICJ Proposal',
          koreaView: {
            title: 'Presidential affirmation of sovereignty',
            text: 'President Lee Myung-bak became the first Korean president to visit Dokdo, declaring Korea\'s firm territorial sovereignty to the domestic and international community.'
          },
          japanView: {
            title: 'Renewed call for ICJ resolution',
            text: 'Japan characterized the presidential visit as a provocation and proposed a third ICJ referral seeking international legal resolution. Korea again rejected. Korea-Japan relations deteriorated significantly.'
          },
          image: null
        }
      ]
    },
    korea: {
      title: 'Korea\'s Position',
      subtitle: 'The basis for the Republic of Korea\'s sovereignty claim over Dokdo',
      claims: [
        {
          title: 'Historical Precedence',
          text: 'Since the subjugation of Usan-guk in 512 AD, Usando has appeared continuously in official Joseon-era records (Sejong Sillok Jiriji, Dongguk Yeoji Seungnam, etc.). Korea argues this demonstrates sovereignty predating Japan\'s claim by centuries.'
        },
        {
          title: 'An Yong-bok\'s Diplomacy (1693–1696)',
          text: 'Korean fisherman An Yong-bok traveled to Japan and asserted Joseon sovereignty over Ulleungdo and Dokdo. The Tokugawa Shogunate subsequently banned Japanese fishermen from traveling to Ulleungdo. Korea argues this constitutes Japanese acknowledgment of Korean sovereignty.'
        },
        {
          title: 'Dajokan Order (1877)',
          text: 'Japan\'s highest governmental body officially determined that "Ulleungdo and one other island are not related to Japan." Korea argues "the other island" refers to Dokdo, meaning Japan itself confirmed Dokdo was not Japanese territory.'
        },
        {
          title: 'Imperial Edict No. 41 (1900)',
          text: 'The Korean Empire established Uldo County with jurisdiction including "Seokdo (石島)." Korea argues Seokdo refers to Dokdo, proving Korean administration of the islands before Japan\'s 1905 incorporation.'
        },
        {
          title: 'Effective Control (1952–Present)',
          text: 'South Korea has maintained a coast guard garrison on Dokdo since 1952, constructed a lighthouse and dock facilities, and permitted civilian residence — exercising continuous, peaceful effective control for over 70 years.'
        },
        {
          title: 'SCAPIN 677 (1946)',
          text: 'The post-WWII Allied directive SCAPIN 677 explicitly excluded Dokdo from Japanese administrative authority. Korea presents this as evidence that Dokdo was recognized as Korean territory in the post-war settlement.'
        }
      ]
    },
    japan: {
      title: 'Japan\'s Position',
      subtitle: 'The basis for Japan\'s sovereignty claim over Takeshima',
      claims: [
        {
          title: 'Terra Nullius (1905)',
          text: 'The Japanese government maintains that Takeshima (Dokdo) was terra nullius — belonging to no state — at the time of its 1905 Cabinet decision, and that its incorporation was a legitimate exercise of sovereignty under international law.'
        },
        {
          title: '17th Century Fishing Activity',
          text: 'During the Edo period, the Oya and Murakawa families operated with shogunate licenses and used Takeshima as a waypoint and fishing base en route to Ulleungdo. Japan argues this demonstrates practical utilization since the 17th century.'
        },
        {
          title: 'San Francisco Peace Treaty (1951)',
          text: 'Article 2 specified Jeju, Geomundo, and Ulleungdo as territories Japan must renounce, but Takeshima was not included among them. Japan interprets this as Allied recognition that Takeshima is Japanese territory.'
        },
        {
          title: 'Rusk Documents (1951)',
          text: 'U.S. Assistant Secretary of State Dean Rusk\'s letter to the Korean ambassador stated that "Dokdo was never treated as part of Korea" and had been under Shimane Prefecture\'s jurisdiction since approximately 1905. Japan considers this a significant expression of the U.S. position.'
        },
        {
          title: 'ICJ Referral Proposals',
          text: 'Japan has proposed referring the dispute to the International Court of Justice three times (1954, 1962, 2012), all rejected by Korea. Japan advocates for peaceful resolution through international law and interprets Korea\'s refusal as suggesting a lack of legal confidence.'
        },
        {
          title: 'Administrative Actions',
          text: 'Following the 1905 incorporation, Shimane Prefecture formally registered Takeshima, issued sea lion hunting licenses, and conducted surveys — demonstrating administrative governance of the islands.'
        }
      ]
    },
    law: {
      title: 'International Law Perspectives',
      table: {
        headers: ['Issue', 'Korean Position', 'Japanese Position'],
        rows: [
          [
            'Historical Title',
            'Korea has continuously recognized and governed Dokdo since 512 AD, supported by numerous historical texts and maps',
            'Whether "Usando" in Korean records refers to Dokdo is unclear; historical title has not been proven'
          ],
          [
            'Legality of 1905 Incorporation',
            'Part of Japan\'s imperial aggression against Korea — not terra nullius, but illegal seizure of existing Korean territory',
            'Legitimate incorporation of terra nullius under international law, separate from the 1910 annexation of Korea'
          ],
          [
            'SF Peace Treaty Interpretation',
            'Dokdo\'s omission from renounced territories was a simple oversight; SCAPIN 677 had already confirmed Dokdo as Korean territory',
            'Dokdo\'s exclusion from renounced territories reflects Allied recognition of Japanese sovereignty'
          ],
          [
            'Effective Control',
            'Over 70 years of peaceful, continuous effective control since 1952',
            'Korea\'s occupation since 1952 is an illegal seizure via the Rhee Line; Japan\'s persistent protests prevent acquiescence'
          ],
          [
            'International Adjudication',
            'Dokdo is inherently Korean territory with no dispute; ICJ referral is unnecessary',
            'Japan seeks peaceful resolution through international law; Korea\'s ICJ refusal suggests weak legal standing'
          ]
        ]
      },
      principles: [
        {
          title: 'Effective Occupation',
          text: 'One of the key criteria for proving territorial sovereignty under international law. Korea has exercised effective control over Dokdo for over 70 years, while Japan characterizes this as illegal occupation and has continuously protested.'
        },
        {
          title: 'Critical Date',
          text: 'The question of which point in time should serve as the basis for judgment in a territorial dispute. Whether the critical date is set at 1905, 1945, or 1952 significantly affects the advantages and disadvantages for each side.'
        },
        {
          title: 'Terra Nullius',
          text: 'Japan claims Dokdo was terra nullius (belonging to no state) in 1905, while Korea counters that it had already been exercising sovereignty, meaning the territory was not unclaimed.'
        },
        {
          title: 'Treaty Interpretation',
          text: 'The fact that Dokdo was not explicitly mentioned in the 1951 San Francisco Peace Treaty leaves room for interpretation by both sides, and this ambiguity is one of the core causes of the dispute.'
        }
      ]
    },
    conclusion: {
      line1: 'The sovereignty dispute between Korea and Japan over Dokdo transcends a simple territorial issue — it is a complex conflict involving historical awareness and the interpretation of international law.',
      line2: 'Objectively understanding both nations\' claims is the first step toward a peaceful resolution.',
      line3: 'Only dialogue based on historical facts and mutual respect can build sustainable peace in Northeast Asia.',
      sourcesTitle: 'References',
      source5: 'Dajokan Order (太政官指令, 1877)',
      source6: 'Korean Imperial Edict No. 41 (1900)'
    },
    footer: {
      text: 'This website was created for educational purposes and aims to present both perspectives objectively.'
    },
    dots: ['Home', 'Geography', 'Timeline', 'Korea', 'Japan', 'Law', 'Conclusion']
  }
};

/* --- i18n Engine --- */
let currentLang = localStorage.getItem('dokdo-lang') || 'ko';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dokdo-lang', lang);

  // Update <html> lang attribute
  document.documentElement.lang = lang;

  // Toggle body class
  document.body.classList.remove('lang-ko', 'lang-en');
  document.body.classList.add(`lang-${lang}`);

  // Update all static [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(translations[lang], key);
    if (value) {
      el.textContent = value;
    }
  });

  // Update language toggle UI
  const koOption = document.querySelector('.lang-toggle__option--ko');
  const enOption = document.querySelector('.lang-toggle__option--en');
  if (koOption && enOption) {
    koOption.classList.toggle('active', lang === 'ko');
    enOption.classList.toggle('active', lang === 'en');
  }

  // Re-render dynamic content
  renderTimeline(lang);
  renderClaims('korea', lang);
  renderClaims('japan', lang);
  renderComparisonTable(lang);
  renderLawPrinciples(lang);
  // Refresh GSAP ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }
}

/* --- Dynamic Content Renderers --- */

function renderTimeline(lang) {
  var data = translations[lang].timeline;
  var events = data.events;
  var trackContainer = document.getElementById('tl-track');
  var dotsContainer = document.getElementById('tl-progress-dots');
  if (!trackContainer) return;

  // Cover slide (title card before first event)
  var coverHtml = '<div class="tl-slide tl-slide--cover" data-era="ancient">'
    + '<div class="tl-slide__cover-content">'
    + '<h2 class="tl-slide__cover-title">' + data.title + '</h2>'
    + '<div class="title-underline title-underline--gold"></div>'
    + '<p class="tl-slide__cover-subtitle">' + (data.coverSubtitle || '') + '</p>'
    + '<div class="tl-slide__cover-legend">'
    + '<span class="tl__legend-item"><span class="tl__legend-dot tl__legend-dot--korea"></span>' + data.legendKorea + '</span>'
    + '<span class="tl__legend-item"><span class="tl__legend-dot tl__legend-dot--japan"></span>' + data.legendJapan + '</span>'
    + '<span class="tl__legend-item"><span class="tl__legend-dot tl__legend-dot--both"></span>' + data.legendBoth + '</span>'
    + '</div>'
    + '<div class="tl-slide__cover-hint">'
    + '<span>' + (data.scrollHint || '') + '</span>'
    + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    + '</div>'
    + '</div>'
    + '<div class="tl-slide__seal"></div>'
    + '</div>';

  trackContainer.innerHTML = coverHtml + events.map(function(evt, i) {
    var side = evt.side || 'korea';
    var era = evt.era || 'ancient';
    var hasBoth = evt.koreaView && evt.japanView;
    var perspClass = hasBoth ? '' : ' tl-slide__perspectives--single';

    var koreaHtml = '';
    if (evt.koreaView) {
      koreaHtml = '<div class="tl-slide__panel tl-slide__panel--korea">'
        + '<div class="tl-slide__panel-header">'
        + '<span class="tl-slide__panel-dot tl-slide__panel-dot--korea"></span>'
        + '<span class="tl-slide__panel-label">' + data.labelKorea + '</span>'
        + '</div>'
        + '<h4 class="tl-slide__panel-title">' + evt.koreaView.title + '</h4>'
        + '<p class="tl-slide__panel-text">' + evt.koreaView.text + '</p>'
        + '</div>';
    }

    var japanHtml = '';
    if (evt.japanView) {
      japanHtml = '<div class="tl-slide__panel tl-slide__panel--japan">'
        + '<div class="tl-slide__panel-header">'
        + '<span class="tl-slide__panel-dot tl-slide__panel-dot--japan"></span>'
        + '<span class="tl-slide__panel-label">' + data.labelJapan + '</span>'
        + '</div>'
        + '<h4 class="tl-slide__panel-title">' + evt.japanView.title + '</h4>'
        + '<p class="tl-slide__panel-text">' + evt.japanView.text + '</p>'
        + '</div>';
    }

    var imageHtml = '';
    if (evt.image && evt.image.url) {
      imageHtml = '<div class="tl-slide__image">'
        + '<img src="' + evt.image.url + '" alt="' + (evt.image.alt || '') + '" loading="lazy" />'
        + '<span class="tl-slide__image-caption">' + (evt.image.caption || '') + '</span>'
        + '</div>';
    } else {
      imageHtml = '<div class="tl-slide__image tl-slide__image--fallback">'
        + '<div class="tl-slide__image-deco">'
        + '<span class="tl-slide__image-deco-year">' + (evt.year || '') + '</span>'
        + '</div></div>';
    }

    return '<div class="tl-slide tl-slide--' + side + '" data-tl-idx="' + i + '" data-era="' + era + '">'
      + '<div class="tl-slide__year-badge">'
      + '<span class="tl-slide__year">' + (evt.year || '') + '</span>'
      + '<span class="tl-slide__date">' + evt.date + '</span>'
      + '</div>'
      + '<h3 class="tl-slide__title">' + evt.title + '</h3>'
      + '<div class="tl-slide__perspectives' + perspClass + '">'
      + koreaHtml + japanHtml
      + '</div>'
      + imageHtml
      + '<div class="tl-slide__seal"></div>'
      + '</div>';
  }).join('');

  // Render progress dots
  if (dotsContainer) {
    dotsContainer.innerHTML = events.map(function(evt, i) {
      return '<div class="tl__progress-dot tl__progress-dot--' + (evt.side || 'korea')
        + '" data-tl-dot="' + i + '" data-year="' + evt.date + '"></div>';
    }).join('');
  }

  // Update legend labels
  var legendKorea = document.querySelector('.tl__legend-text--korea');
  var legendJapan = document.querySelector('.tl__legend-text--japan');
  var legendBoth = document.querySelector('.tl__legend-text--both');
  if (legendKorea) legendKorea.textContent = data.legendKorea;
  if (legendJapan) legendJapan.textContent = data.legendJapan;
  if (legendBoth) legendBoth.textContent = data.legendBoth;
}

function renderClaims(section, lang) {
  const claims = translations[lang][section].claims;
  const container = document.getElementById(`${section}-claims`);
  if (!container) return;

  container.innerHTML = claims.map((claim, i) => `
    <div class="claim-card">
      <div class="claim-card__number">${String(i + 1).padStart(2, '0')}</div>
      <h3 class="claim-card__title">${claim.title}</h3>
      <p class="claim-card__text">${claim.text}</p>
    </div>
  `).join('');
}

function renderComparisonTable(lang) {
  const table = translations[lang].law.table;
  const container = document.getElementById('comparison-table');
  if (!container) return;

  const headerHtml = `<thead><tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
  const bodyHtml = `<tbody>${table.rows.map(row =>
    `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
  ).join('')}</tbody>`;

  container.innerHTML = headerHtml + bodyHtml;
}

function renderLawPrinciples(lang) {
  const principles = translations[lang].law.principles;
  const container = document.getElementById('law-principles');
  if (!container) return;

  container.innerHTML = principles.map(p => `
    <div class="law__principle fade-up">
      <div class="law__principle-title">${p.title}</div>
      <p class="law__principle-text">${p.text}</p>
    </div>
  `).join('');
}

/* --- Initialize --- */
function initI18n() {
  // Set up language toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'ko' ? 'en' : 'ko';

      // Brief crossfade transition
      const overlay = document.createElement('div');
      overlay.className = 'lang-transition';
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.classList.add('lang-transition--active');
        setTimeout(() => {
          setLanguage(newLang);
          overlay.classList.remove('lang-transition--active');
          setTimeout(() => overlay.remove(), 200);
        }, 150);
      });
    });
  }

  // Initial render
  setLanguage(currentLang);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
