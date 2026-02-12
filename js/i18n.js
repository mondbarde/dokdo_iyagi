/* ===================================
   독도 이야기 - Internationalization
   Korean / English / Japanese trilingual support
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
          image: { url: 'assets/images/three_kingdom.jpeg', alt: '삼국사기 신라본기', caption: '삼국사기 신라본기 — 우산국 복속 기록', credit: '연세대학교 소장' }
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
          images: [
            { url: 'assets/images/sejong_jiriji.jpeg', alt: '세종실록지리지', caption: '세종실록지리지 원문' },
            { url: 'assets/images/dokdo_from_uleung01.png', alt: '울릉도에서 본 독도', caption: '울릉도에서 바라본 독도' },
            { url: 'assets/images/dokdo_from_uleung02.png', alt: '울릉도에서 본 독도', caption: '울릉도에서 바라본 독도 (새벽)' }
          ]
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
          images: [
            { url: 'assets/images/new_dongguk_yeoji.jpeg', alt: '신증동국여지승람', caption: '신증동국여지승람 원문' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ulleungdo_and_Usando.jpg', alt: '팔도총도', caption: '팔도총도 - 울릉도와 우산도 (1530)', credit: 'Wikimedia Commons, Public Domain' }
          ]
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
          images: [
            { url: 'assets/images/oya_murakawa.png', alt: '오야·무라카와 도해면허', caption: '오야·무라카와 도해면허 원문' }
          ]
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
          images: [
            { url: 'assets/images/bakufu-published-document.png', alt: '막부 공문서', caption: '울릉도쟁계 관련 막부 공문서' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Old_Map_of_Liancourt_Rocks.jpg', alt: '17세기 울릉도·독도 항로도', caption: '오키 제도에서 울릉도·독도 항로를 보여주는 17세기 일본 지도', credit: 'Wikimedia Commons, Public Domain' }
          ]
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
          images: [
            { url: 'assets/images/toukai_kinshirei.png', alt: '울릉도 도해금지령', caption: '울릉도 도해금지령 원문' }
          ]
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
          images: [
            { url: 'assets/images/dongguk_munheon_bigo.jpeg', alt: '동국문헌비고', caption: '동국문헌비고 원문' }
          ]
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
          images: [
            { url: 'assets/images/view0503_img01_b.jpg', alt: '태정관지령 문서', caption: '태정관지령 원문' },
            { url: 'assets/images/view0503_img02_b (1).jpg', alt: '태정관지령 첨부 문서', caption: '태정관지령 첨부 문서' }
          ]
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
          images: [
            { url: 'assets/images/takeshima01-0310.jpg', alt: '시마네현 고시 제40호', caption: '시마네현 고시 제40호 (1905)' }
          ]
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
          images: [
            { url: 'assets/images/daehanilbo-article.jpg', alt: '대한일보 기사', caption: '심흥택 보고 관련 대한일보 기사' }
          ]
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
          images: [
            { url: 'assets/images/58365_201801251132046430.png', alt: '포츠담 선언 수락 칙령', caption: '포츠담 선언 수락에 따라 발하는 명령에 관한 건 (1945년 칙령 제542호)' }
          ]
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
          images: [
            { url: 'assets/images/K0000002_0091000001200503030304_31_1[W680-].jpg', alt: '독도의용수비대', caption: '독도의용수비대 단체 사진' }
          ]
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
          images: [
            { url: 'assets/images/icj01_01.png', alt: 'ICJ 제소 제안 문서 1', caption: '1차 ICJ 제소 제안 문서' },
            { url: 'assets/images/icj01_02.png', alt: 'ICJ 제소 제안 문서 2', caption: '1차 ICJ 제소 제안 문서 (2)' }
          ]
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
          images: [
            { url: 'assets/images/A_copy_of_Treaty_on_Basic_Relations_between_Japan_and_the_Republic_of_Korea.jpg', alt: '한일기본조약', caption: '한일기본조약 원본' }
          ]
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
          images: [
            { url: 'assets/images/takeshima_day.png', alt: '다케시마의 날', caption: '다케시마의 날 제정 관련 자료' }
          ]
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
          images: [
            { url: 'assets/images/20130222102054.jpeg', alt: '이명박 대통령 독도 방문', caption: '이명박 대통령 독도 방문 (2012)' }
          ]
        }
      ]
    },
    claims: {
      title: '쟁점별 비교',
      subtitle: '독도/다케시마 영유권 분쟁의 핵심 쟁점과 양국의 입장',
      koreaLabel: '한국의 입장',
      japanLabel: '일본의 입장',
      analysisLabel: '객관적 평가',
      issues: [
        {
          topic: '역사적 영유권의 근거',
          korea: {
            title: '역사적 선점 (512년~)',
            text: '512년 신라의 우산국 복속 이래, 조선시대 관찬 기록(세종실록지리지, 동국여지승람 등)에 우산도가 지속적으로 등장합니다. 이는 한국이 일본보다 수 세기 앞서 독도를 인지하고 영유해왔음을 보여줍니다.'
          },
          japan: {
            title: '무주지 선점 (1905년)',
            text: '일본 정부는 다케시마(독도)가 1905년 각의 결정 당시 어느 나라에도 속하지 않은 무주지(terra nullius)였으며, 국제법의 원칙에 따라 합법적으로 영토에 편입한 것이라고 주장합니다.'
          },
          koreaWeight: 60,
          analysis: '한국의 고문헌 기록이 시기적으로 앞서며, 다수의 관찬 사료가 이를 뒷받침한다는 점에서 한국 측 주장이 다소 우위에 있습니다. 다만, "우산도"가 오늘날의 독도와 동일한 섬인지에 대한 해석 논쟁이 한국 측 주장의 결정적 약점입니다. 일본의 무주지 주장은 1905년 이전의 양국 역사적 기록과 활동을 충분히 설명하지 못한다는 한계가 있습니다.'
        },
        {
          topic: '17세기 영유권 활동',
          korea: {
            title: '안용복의 외교 활동 (1693~1696)',
            text: '조선 어부 안용복은 일본에 건너가 울릉도와 독도가 조선의 영토임을 주장했고, 이후 도쿠가와 막부는 일본 어민의 울릉도 도해를 금지하는 조치를 취했습니다. 이는 당시 일본 정부도 이 섬들의 조선 영유권을 인정한 것이라고 한국은 주장합니다.'
          },
          japan: {
            title: '17세기 어업 활동',
            text: '에도시대 오야(大谷)가문과 무라카와(村川)가문이 막부의 허가를 받아 울릉도로 향하는 도중 다케시마를 중간 기항지이자 어업 근거지로 이용했다고 주장합니다. 이는 일본이 17세기부터 다케시마를 실질적으로 활용했음을 보여준다고 합니다.'
          },
          koreaWeight: 65,
          analysis: '양국 모두 17세기 활동의 증거를 제시하고 있으나, 1696년 도쿠가와 막부가 자국민의 울릉도 도해를 공식적으로 금지했다는 사실은 한국 측에 유리한 근거입니다. 이 금지령은 일본 정부 자체의 공식 행위로서, 해당 수역에 대한 조선의 관할을 사실상 인정한 것으로 해석될 여지가 큽니다. 다만, 이 금지령이 독도까지 명시적으로 포함하는지는 여전히 논쟁의 대상입니다.'
        },
        {
          topic: '19세기 말~20세기 초 공식 조치',
          korea: {
            title: '태정관지령 (1877) · 칙령 제41호 (1900)',
            text: '일본의 최고 국가기관이었던 태정관이 1877년 "울릉도와 그 외 1도는 일본과 관계없다"고 공식 결정했습니다. 또한 1900년 대한제국이 울도군을 설치하면서 관할에 "석도(石島)"를 포함시켰으며, 한국 측은 석도가 독도의 당시 명칭이라고 주장합니다. 이는 일본의 1905년 편입 이전에 한국이 이미 독도를 공식적으로 관할하고 있었음을 보여준다고 합니다.'
          },
          japan: {
            title: '1905년 각의 결정 · 행정적 조치',
            text: '1905년 각의 결정으로 다케시마를 시마네현에 편입한 후, 정식 등록, 강치(바다사자) 포획 허가 발급, 측량 실시 등의 행정적 관할 행위를 수행했습니다. 일본은 이 편입이 국제법상 합법적 절차를 따른 것이라고 주장합니다.'
          },
          koreaWeight: 70,
          analysis: '이 쟁점에서는 한국 측 주장이 상당히 우위에 있습니다. 1877년 태정관지령은 일본의 최고 국가기관이 스스로 "일본과 관계없다"고 공식 결정한 문서로서, 상대국의 문서가 아닌 자국 정부의 문서라는 점에서 증거력이 매우 높습니다. 또한 일본의 1905년 편입은 러일전쟁 중 한국의 외교권이 사실상 박탈되어가는 시기에 이루어졌다는 역사적 맥락이 그 합법성에 의문을 제기합니다. 다만, 칙령 41호의 "석도"가 독도와 동일한지는 여전히 학술적 논쟁의 대상입니다.'
        },
        {
          topic: '전후 국제 문서와 조약',
          korea: {
            title: 'SCAPIN 677 (1946)',
            text: '제2차 세계대전 종전 후 연합군 최고사령부가 발한 SCAPIN 677은 독도를 일본의 행정권에서 명시적으로 제외했습니다. 한국은 이를 전후 처리에서 독도가 한국 영토로 인정되었음을 보여주는 증거로 제시합니다.'
          },
          japan: {
            title: 'SF 강화조약 (1951) · 러스크 서한',
            text: '샌프란시스코 강화조약 제2조에서 일본이 포기할 영토로 제주도·거문도·울릉도를 명시했지만, 다케시마는 포기 대상에 포함되지 않았습니다. 또한 미국 국무부 차관보 딘 러스크가 한국 대사에게 보낸 서한에서 "독도는 한국의 영토로 취급된 적이 없다"고 밝혔으며, 일본은 이를 연합국의 공식 입장으로 중시합니다.'
          },
          koreaWeight: 45,
          analysis: '이 쟁점에서는 일본 측 주장이 다소 우위에 있습니다. 샌프란시스코 강화조약에서 독도가 일본의 포기 대상에 명시되지 않은 점과, 러스크 서한이 명시적으로 일본의 입장을 지지하고 있다는 점은 조약 해석상 일본에 유리합니다. 다만, SCAPIN 677이 독도를 일본 행정권에서 제외한 것은 한국에 유리한 근거이며, 러스크 서한은 미국 한 나라의 비공개 의견에 불과하다는 반론도 있습니다. 궁극적으로 어떤 문서도 독도의 최종 지위를 명시적으로 확정하지 않았습니다.'
        },
        {
          topic: '현대 실효적 지배와 국제 재판',
          korea: {
            title: '실효적 지배 (1952~현재)',
            text: '대한민국은 1952년 이래 독도에 경비대를 주둔시키고, 등대·접안시설 등을 건설하며, 민간인 거주를 허용하는 등 지속적이고 평화적인 실효적 지배를 행사하고 있습니다. 한국은 독도가 분쟁 자체가 존재하지 않는 고유의 영토라는 입장입니다.'
          },
          japan: {
            title: 'ICJ 회부 제안',
            text: '일본은 이 분쟁을 국제사법재판소(ICJ)에 세 차례(1954, 1962, 2012) 회부하자고 제안했으나 한국이 모두 거부했습니다. 일본은 국제법적 해결을 추구한다는 입장이며, 한국의 거부를 법적 자신감의 부재로 해석합니다.'
          },
          koreaWeight: 75,
          analysis: '이 쟁점에서는 한국 측이 명확히 우위에 있습니다. 70년 이상의 실효적 지배는 국제법에서 영토 주권을 입증하는 가장 강력한 근거 중 하나이며, 한국은 경비대 주둔, 시설 건설, 주민 거주 등 실질적인 주권 행사의 모든 요건을 갖추고 있습니다. 일본의 ICJ 회부 제안은 분쟁 해결 의지를 보여주나, ICJ 관할권은 양국의 합의가 필요하므로 한국의 거부 자체는 국제법상 정당한 권리입니다. 한편, 일본 역시 자국이 당사자인 다른 영토 분쟁—센카쿠/댜오위다오(중국)와 쿠릴 열도/북방영토(러시아)—에서는 상대국의 ICJ 회부 제안을 거부하고 있어, ICJ 회부를 둘러싼 일본의 입장에는 일관성 문제가 존재합니다. 다만, 일본의 지속적인 항의로 인해 묵인(acquiescence)이 완전히 성립했다고 단정하기는 어렵습니다.'
        }
      ]
    },
    law: {
      title: '국제법적 관점',
      subtitle: '독도/다케시마 분쟁에 적용되는 국제법 원칙과 종합 평가',
      principles: [
        {
          title: '실효적 지배 (Effective Occupation)',
          text: '영토 주권을 입증하는 국제법상 가장 강력한 기준 중 하나입니다. 실효적 지배가 인정되려면 국가 기능의 지속적이고 평화적인 행사가 필요합니다.',
          assessment: '한국은 1952년 이래 경비대 주둔, 등대·접안시설 건설, 민간인 거주 허용 등 실효적 지배의 모든 요건을 충족하고 있습니다. 다만, 일본의 지속적인 항의가 있어 묵인(acquiescence)의 완전한 성립 여부는 법적으로 논쟁 중입니다.',
          favorKorea: true
        },
        {
          title: '결정적 기일 (Critical Date)',
          text: '영토 분쟁에서 어느 시점의 상황을 기준으로 판단할 것인가의 문제입니다. 결정적 기일 이후의 행위는 원칙적으로 법적 효력이 제한됩니다.',
          assessment: '1905년을 기준으로 하면 일본에 유리하고, 1945년(종전) 또는 1952년(한국 실효적 지배 개시)을 기준으로 하면 한국에 유리합니다. 일본의 1905년 편입이 식민지 침탈 과정에서 이루어졌다는 점은 결정적 기일 설정에 중요한 고려 요소입니다.',
          favorKorea: null
        },
        {
          title: '무주지 선점 (Terra Nullius)',
          text: '어떤 국가에도 속하지 않는 무주지를 국제법 절차에 따라 편입할 수 있다는 원칙입니다. 선점이 유효하려면 해당 영토가 실제로 무주지였음이 입증되어야 합니다.',
          assessment: '일본은 1905년 독도가 무주지였다고 주장하지만, 한국의 역사적 기록(512년 이후)과 태정관지령(1877년) 등 일본 자체 문서가 이에 반하는 증거를 제공합니다. 무주지 주장의 입증 책임은 일본에 있으며, 현존 사료에 비추어 이 입증은 상당히 어렵습니다.',
          favorKorea: true
        },
        {
          title: '조약 해석 (Treaty Interpretation)',
          text: '1951년 샌프란시스코 강화조약은 일본의 전후 영토를 확정한 핵심 조약이나, 독도의 귀속을 명시적으로 언급하지 않아 양측 모두에게 해석의 여지를 남겼습니다.',
          assessment: '조약 문면상 독도가 일본 포기 대상에 포함되지 않은 점은 일본에 유리하나, 이는 수천 개 도서의 명시적 열거가 불가능했다는 맥락에서 이해해야 합니다. SCAPIN 677(1946)이 독도를 일본에서 제외한 점은 한국에 유리하지만, "최종 결정이 아니다"라는 단서가 있습니다.',
          favorKorea: false
        },
        {
          title: '시제법 (Intertemporal Law)',
          text: '영토 취득의 합법성은 해당 행위가 이루어진 시점의 국제법에 따라 판단해야 한다는 원칙입니다. 이는 역사적 사건을 현대 기준으로 소급 평가하는 것을 제한합니다.',
          assessment: '1905년 당시의 국제법은 식민지 확장을 일반적으로 용인했으나, 현대 국제법은 무력이나 강압에 의한 영토 취득을 금지합니다. 일본의 1905년 편입이 러일전쟁과 한국의 외교권 박탈이라는 강압적 상황에서 이루어졌다는 점은 시제법 적용에서도 문제를 제기합니다.',
          favorKorea: true
        }
      ],
      summary: {
        title: '종합 평가',
        text: '국제법적 관점에서 독도/다케시마 분쟁을 종합적으로 분석하면, 한국 측이 전반적으로 더 강한 법적 근거를 보유하고 있는 것으로 평가됩니다. 특히 70년 이상의 실효적 지배, 태정관지령 등 일본 자체 문서에 의한 비일본 영토 확인, 그리고 1905년 편입의 역사적 맥락이 한국에 유리한 핵심 근거입니다. 반면, 샌프란시스코 강화조약의 문면 해석과 러스크 서한은 일본에 유리한 근거입니다. 다만, 이 분쟁이 실제로 ICJ에서 다루어진 적이 없으므로, 최종적인 법적 판단은 내려진 바 없습니다. 영토 분쟁의 평화적 해결을 위해서는 양국이 역사적 사실과 국제법 원칙에 기반한 진지한 대화를 이어가야 합니다.'
      }
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
    nav: { title: 'Liancourt Rocks' },
    hero: {
      title: 'Liancourt Rocks',
      subtitle: 'The Disputed Islands of the East Sea — A Journey Through History',
      scroll: 'Scroll to explore'
    },
    geo: {
      title: 'Geographic Overview',
      map: {
        korea: 'South Korea',
        japan: 'Japan',
        ulleungdo: 'Ulleungdo',
        dokdo: 'Liancourt Rocks',
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
        text: 'Located where warm and cold ocean currents converge, Liancourt Rocks hosts rare seabirds (black-tailed gulls, swinhoe\'s storm petrels) and diverse marine life. Designated Natural Monument No. 336.'
      },
      fact5: {
        title: 'Climate',
        text: 'Average annual temperature of ~12\u00B0C with ~1,324mm of rainfall. Frequent fog, overcast skies, and strong northwest winter monsoon winds — a typical oceanic climate.'
      },
      fact6: {
        title: 'Undersea Terrain',
        text: 'Liancourt Rocks is the summit of a massive seamount rising from the East Sea (Sea of Japan) floor at approximately 2,000m depth. Only a tiny fraction of the overall volcanic structure is visible above sea level.'
      },
      fact7: {
        title: 'Current Status',
        text: 'Approximately 40 Korean coast guard police are permanently stationed on Liancourt Rocks. Facilities include a lighthouse, dock, and helipad. A civilian resident has lived on the island since 1991.'
      },
      fact8: {
        title: 'Multiple Names',
        text: 'Known internationally as the Liancourt Rocks; called Dokdo (\uB3C5\uB3C4) in Korea and Takeshima (\u7AF9\u5CF6) in Japan. The name "Liancourt" comes from the French whaling ship that spotted the rocks in 1849.'
      }
    },
    timeline: {
      title: 'Historical Timeline',
      coverSubtitle: 'A chronological look at historical records and perspectives from Korea and Japan regarding Liancourt Rocks.',
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
            text: 'Under King Jijeung of Silla, General Isabu subjugated Usan-guk (including Ulleungdo and Usando). Recorded in the Samguk Sagi. Liancourt Rocks was part of Usan-guk, marking the start of Korean sovereignty.'
          },
          japanView: {
            title: 'Scope of Usan-guk unclear',
            text: 'Whether Usan-guk referred only to Ulleungdo or also included Liancourt Rocks is historically uncertain. A 6th-century record alone is insufficient to claim sovereignty over Liancourt Rocks.'
          },
          image: { url: 'assets/images/three_kingdom.jpeg', alt: 'Samguk Sagi, Silla Bongi', caption: 'Samguk Sagi, Silla Bongi — Record of Usan-guk subjugation', credit: 'Yonsei University Collection' }
        },
        {
          date: '1145', year: 1145, side: 'korea', era: 'ancient',
          title: 'Samguk Sagi Compilation',
          koreaView: {
            title: 'Official historical record',
            text: 'The Samguk Sagi, compiled by Kim Busik, officially records the subjugation of Usan-guk in 512 AD. A key document Korea presents as the historical basis of its Liancourt Rocks sovereignty.'
          },
          japanView: {
            title: 'No direct link to Liancourt Rocks',
            text: 'The Samguk Sagi\'s Usan-guk records contain no specific mention of Liancourt Rocks (Takeshima). Records of Ulleungdo\'s subjugation cannot serve as grounds for Liancourt Rocks sovereignty.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Samguk.JPG', alt: 'Samguk Sagi', caption: 'Original Samguk Sagi manuscript', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1454', year: 1454, side: 'korea', era: 'ancient',
          title: 'Sejong Sillok Jiriji',
          koreaView: {
            title: 'Confirmation of two islands',
            text: '"The two islands of Usan and Mureung are in the sea east of the county. On clear days, they can be seen from each other." Clear evidence that Usando (Liancourt Rocks) was recognized as Korean territory.'
          },
          japanView: {
            title: 'Geographic description mismatch',
            text: 'The claim that the islands "can be seen from each other on clear days" is inconsistent with the actual distance between Ulleungdo and Liancourt Rocks (~87km). Usando may refer to a nearby islet of Ulleungdo.'
          },
          images: [
            { url: 'assets/images/sejong_jiriji.jpeg', alt: 'Sejong Sillok Jiriji', caption: 'Original text of Sejong Sillok Jiriji' },
            { url: 'assets/images/dokdo_from_uleung01.png', alt: 'Liancourt Rocks seen from Ulleungdo', caption: 'Liancourt Rocks as seen from Ulleungdo' },
            { url: 'assets/images/dokdo_from_uleung02.png', alt: 'Liancourt Rocks seen from Ulleungdo', caption: 'Liancourt Rocks seen from Ulleungdo (dawn)' }
          ]
        },
        {
          date: '1531', year: 1531, side: 'korea', era: 'ancient',
          title: 'Sinjeung Dongguk Yeoji Seungnam',
          koreaView: {
            title: 'Official geographic atlas',
            text: 'An official Joseon geographic encyclopedia that maps both Usando and Ulleungdo, demonstrating Joseon\'s awareness and administrative control of Liancourt Rocks.'
          },
          japanView: {
            title: 'Map placement error',
            text: 'In the Paldo Chongdo map, Usando is drawn west of Ulleungdo (toward the Korean peninsula), inconsistent with Liancourt Rocks\'s actual position to the southeast. The identification of Usando as Liancourt Rocks is questionable.'
          },
          images: [
            { url: 'assets/images/new_dongguk_yeoji.jpeg', alt: 'Sinjeung Dongguk Yeoji Seungnam', caption: 'Original text of Sinjeung Dongguk Yeoji Seungnam' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ulleungdo_and_Usando.jpg', alt: 'Paldo Chongdo map', caption: 'Map of the Eight Provinces showing Ulleungdo and Usando (1530)', credit: 'Wikimedia Commons, Public Domain' }
          ]
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
            text: 'The Edo Shogunate granted the Oya and Murakawa families licenses to sail to Ulleungdo (Takeshima) and Matsushima (Liancourt Rocks), using them as fishing bases. Evidence of effective utilization since the 17th century.'
          },
          images: [
            { url: 'assets/images/oya_murakawa.png', alt: 'Oya-Murakawa Passage License', caption: 'Original Oya-Murakawa passage license document' }
          ]
        },
        {
          date: '1667', year: 1667, side: 'japan', era: 'edo',
          title: 'Onshu Shicho Goki',
          koreaView: {
            title: 'Japan\'s own boundary admission',
            text: 'The statement "the northwest boundary of Japan ends at this province (Oki Islands)" confirms that Ulleungdo and Liancourt Rocks lay outside Japanese territory — acknowledged by a Japanese author.'
          },
          japanView: {
            title: 'Evidence of Liancourt Rocks awareness',
            text: 'The Onshu Shicho Goki contains detailed descriptions of Matsushima (Liancourt Rocks) and Takeshima (Ulleungdo), proving that Japan accurately knew Liancourt Rocks\'s existence and location in the 17th century.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Eunju2.jpg', alt: 'Onshu Shicho Goki map', caption: 'Map from the Onshu Shicho Goki (1667)', credit: 'Wikimedia Commons, CC BY-SA 4.0' }
        },
        {
          date: '1693', year: 1693, side: 'both', era: 'edo',
          title: 'An Yong-bok\'s Visit & Ulleungdo Dispute',
          koreaView: {
            title: 'Diplomatic confirmation of sovereignty',
            text: 'Korean fisherman An Yong-bok traveled to Japan asserting Joseon sovereignty over Ulleungdo and Liancourt Rocks, receiving acknowledgment from Japanese officials. Triggered the Ulleungdo Dispute.'
          },
          japanView: {
            title: 'Unreliable testimony',
            text: 'An Yong-bok\'s accounts of his journey and Japanese negotiations are exaggerated and inconsistent with Japanese records. His testimony lacks credibility as official diplomatic documentation.'
          },
          images: [
            { url: 'assets/images/bakufu-published-document.png', alt: 'Bakufu official document', caption: 'Bakufu document related to the Ulleungdo Dispute' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Old_Map_of_Liancourt_Rocks.jpg', alt: '17th century route map', caption: '17th century Japanese map showing the route from Oki Islands to Ulleungdo and Liancourt Rocks', credit: 'Wikimedia Commons, Public Domain' }
          ]
        },
        {
          date: '1696', year: 1696, side: 'both', era: 'edo',
          title: 'Ulleungdo Passage Ban',
          koreaView: {
            title: 'Japan\'s recognition of Korean sovereignty',
            text: 'The Tokugawa Shogunate officially banned Japanese fishermen from traveling to Ulleungdo. Decisive evidence that Japan recognized Joseon\'s sovereignty over both Ulleungdo and Liancourt Rocks.'
          },
          japanView: {
            title: 'Ban limited to Ulleungdo only',
            text: 'The passage ban applied to Takeshima (Ulleungdo), not Matsushima (Liancourt Rocks). Japan\'s claim to Liancourt Rocks was maintained, as no prohibition was placed on travel to the islets.'
          },
          images: [
            { url: 'assets/images/toukai_kinshirei.png', alt: 'Ulleungdo Passage Ban', caption: 'Original Ulleungdo passage ban document' }
          ]
        },
        {
          date: '1770', year: 1770, side: 'korea', era: 'edo',
          title: 'Dongguk Munheon Bigo',
          koreaView: {
            title: 'Definitive identification: Usando = Liancourt Rocks',
            text: '"Usan is what the Japanese call Matsushima (松島)." The most direct historical record confirming that Usando refers to Liancourt Rocks.'
          },
          japanView: {
            title: 'Questionable later annotation',
            text: 'This statement is a compiler\'s annotation, not from original source material. Whether this later interpretation accurately reflects historical fact is debatable.'
          },
          images: [
            { url: 'assets/images/dongguk_munheon_bigo.jpeg', alt: 'Dongguk Munheon Bigo', caption: 'Original text of Dongguk Munheon Bigo' }
          ]
        },
        {
          date: '1877', year: 1877, side: 'both', era: 'imperial',
          title: 'Dajokan Order',
          koreaView: {
            title: 'Japan\'s own government confirms exclusion',
            text: 'Japan\'s highest governmental body officially determined that "Ulleungdo and one other island are not related to Japan." The strongest evidence, from Japan\'s own records, confirming Liancourt Rocks is not Japanese territory.'
          },
          japanView: {
            title: 'Identity of "one other island" disputed',
            text: 'Whether "one other island" in the Dajokan document refers to present-day Liancourt Rocks (Takeshima) is uncertain. Name confusion between Takeshima and Matsushima at the time may mean a different island was intended.'
          },
          images: [
            { url: 'assets/images/view0503_img01_b.jpg', alt: 'Dajokan Order document', caption: 'Original Dajokan Order' },
            { url: 'assets/images/view0503_img02_b (1).jpg', alt: 'Dajokan Order attachment', caption: 'Dajokan Order attached document' }
          ]
        },
        {
          date: '1900', year: 1900, side: 'korea', era: 'imperial',
          title: 'Korean Imperial Edict No. 41',
          koreaView: {
            title: 'Official administration before 1905',
            text: 'The Korean Empire established Uldo County with jurisdiction including "Seokdo (石島)." Seokdo is Liancourt Rocks\'s name at the time, proving Korean administration before Japan\'s 1905 incorporation.'
          },
          japanView: {
            title: 'Insufficient evidence for "Seokdo = Liancourt Rocks"',
            text: 'There is no direct evidence that "Seokdo" refers to Liancourt Rocks. The phonetic and written connection between Seokdo (石島) and Liancourt Rocks (獨島) is unclear, and no records show Uldo County actually administered Liancourt Rocks.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Royal_Decree_No.41.jpg', alt: 'Korean Imperial Edict No. 41', caption: 'Original Korean Imperial Edict No. 41 (1900)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1905', year: 1905, side: 'japan', era: 'imperial',
          title: 'Shimane Prefecture Incorporation',
          koreaView: {
            title: 'Part of imperial aggression',
            text: 'The incorporation in January 1905 — just months before the Eulsa Treaty stripped Korea\'s diplomatic rights — was part of Japan\'s imperial aggression. Liancourt Rocks was not terra nullius but already Korean territory; this was illegal seizure.'
          },
          japanView: {
            title: 'Legitimate incorporation under international law',
            text: 'Japan incorporated terra nullius Takeshima into Shimane Prefecture by Cabinet decision, following international law principles. This was independent of and separate from the 1910 annexation of Korea.'
          },
          images: [
            { url: 'assets/images/takeshima01-0310.jpg', alt: 'Shimane Prefecture Notice No. 40', caption: 'Shimane Prefecture Notice No. 40 (1905)' }
          ]
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
          images: [
            { url: 'assets/images/daehanilbo-article.jpg', alt: 'Daehan Ilbo article', caption: 'Daehan Ilbo article on Sim Heung-taek\'s report' }
          ]
        },
        {
          date: '1945', year: 1945, side: 'both', era: 'modern',
          title: 'Japan\'s Surrender',
          koreaView: {
            title: 'Return of colonial territories',
            text: 'Japan\'s unconditional surrender and acceptance of the Potsdam Declaration. The Cairo Declaration (1943) stipulated the return of "all territories taken by violence and greed" — which includes Liancourt Rocks.'
          },
          japanView: {
            title: 'Start of post-war territorial settlement',
            text: 'Under the Potsdam Declaration, Japanese sovereignty was limited to the four main islands and such islands as the Allies determined. Takeshima\'s final disposition was to be decided by the peace treaty.'
          },
          images: [
            { url: 'assets/images/58365_201801251132046430.png', alt: 'Potsdam Declaration Imperial Edict', caption: 'Imperial Edict No. 542 on Orders under the Potsdam Declaration (1945)' }
          ]
        },
        {
          date: '1946', year: 1946, side: 'both', era: 'modern',
          title: 'SCAPIN 677',
          koreaView: {
            title: 'Liancourt Rocks excluded from Japan',
            text: 'The Allied Supreme Command explicitly excluded Liancourt Rocks from Japanese administrative authority. Evidence that the post-war settlement recognized Liancourt Rocks as Korean territory.'
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
            text: 'Liancourt Rocks\'s absence from the list of renounced territories was a simple omission. SCAPIN 677 had already confirmed Liancourt Rocks as Korean territory, making separate mention unnecessary.'
          },
          japanView: {
            title: 'Not renounced = Japanese territory',
            text: 'Article 2 specifically listed territories Japan renounced (Jeju, Geomundo, Ulleungdo) but excluded Liancourt Rocks. The Rusk Documents confirm: the U.S. stated "Liancourt Rocks was never treated as part of Korea."'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Treaty_of_peace_with_japan.jpg', alt: 'San Francisco Peace Treaty signing', caption: 'Secretary of State Dean Acheson signing the Peace Treaty (1951)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1952', year: 1952, side: 'korea', era: 'modern',
          title: 'Syngman Rhee Line',
          koreaView: {
            title: 'Exercise of sovereign rights',
            text: 'South Korea declared the "Peace Line," placing Liancourt Rocks within Korean waters. A legitimate exercise of sovereign rights over adjacent maritime areas; the beginning of effective control over Liancourt Rocks.'
          },
          japanView: {
            title: 'Unilateral violation of international law',
            text: 'The Syngman Rhee Line was a unilateral claim of jurisdiction over international waters, violating international law. It marked the beginning of Korea\'s illegal occupation of Takeshima.'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Syngman_Rhee_Line_map.jpg', alt: 'Syngman Rhee Line map', caption: 'Official Syngman Rhee Line (Peace Line) map (1952)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1953', year: 1953, side: 'korea', era: 'modern',
          title: 'Liancourt Rocks Volunteer Guards',
          koreaView: {
            title: 'Symbol of Liancourt Rocks protection',
            text: 'A civilian defense corps of 33 members stationed on Liancourt Rocks, guarding the islands until handing over to the Korean National Police in 1956. A symbol of the Korean people\'s commitment to protecting Liancourt Rocks.'
          },
          japanView: {
            title: 'Evidence of forceful occupation',
            text: 'The armed stationing of Korean civilians was not peaceful territorial management but forceful occupation. Firing incidents against Japanese fishermen and maritime patrol vessels occurred.'
          },
          images: [
            { url: 'assets/images/K0000002_0091000001200503030304_31_1[W680-].jpg', alt: 'Liancourt Rocks Volunteer Guards', caption: 'Liancourt Rocks Volunteer Guards group photo' }
          ]
        },
        {
          date: '1954', year: 1954, side: 'japan', era: 'modern',
          title: '1st ICJ Referral Proposal',
          koreaView: {
            title: 'No dispute exists to adjudicate',
            text: 'Liancourt Rocks is inherently Korean territory, not a subject of dispute. An ICJ referral is a Japanese strategy to elevate Liancourt Rocks to "disputed territory" status; Korea rightfully rejected it.'
          },
          japanView: {
            title: 'Seeking peaceful legal resolution',
            text: 'Japan proposed referring the dispute to the International Court of Justice for peaceful resolution under international law. Korea\'s rejection suggests a lack of confidence in its legal position.'
          },
          images: [
            { url: 'assets/images/icj01_01.png', alt: 'ICJ referral proposal document 1', caption: '1st ICJ referral proposal document' },
            { url: 'assets/images/icj01_02.png', alt: 'ICJ referral proposal document 2', caption: '1st ICJ referral proposal document (2)' }
          ]
        },
        {
          date: '1965', year: 1965, side: 'both', era: 'modern',
          title: 'Treaty on Basic Relations',
          koreaView: {
            title: 'Liancourt Rocks was not a negotiation item',
            text: 'During Korea-Japan normalization, the Liancourt Rocks issue was not placed on the agenda. As inherent Korean territory, Liancourt Rocks cannot be a subject of negotiation.'
          },
          japanView: {
            title: 'Left unresolved by agreement',
            text: 'To achieve diplomatic normalization, both sides agreed to leave the Liancourt Rocks issue unresolved. It falls under the general clause that "disputes shall be settled through diplomacy."'
          },
          images: [
            { url: 'assets/images/A_copy_of_Treaty_on_Basic_Relations_between_Japan_and_the_Republic_of_Korea.jpg', alt: 'Treaty on Basic Relations', caption: 'Original copy of the Treaty on Basic Relations between Japan and the Republic of Korea' }
          ]
        },
        {
          date: '2005', year: 2005, side: 'japan', era: 'contemporary',
          title: 'Takeshima Day Established',
          koreaView: {
            title: 'Provocative historical distortion',
            text: 'Shimane Prefecture\'s "Takeshima Day" glorifies Japan\'s seizure of Liancourt Rocks. The Korean government and public strongly protested, deepening diplomatic tensions.'
          },
          japanView: {
            title: 'Peaceful expression of territorial claim',
            text: 'February 22 was designated "Takeshima Day" to commemorate the 100th anniversary of the 1905 Cabinet decision incorporating Takeshima into Shimane Prefecture. A peaceful expression of Japan\'s legitimate sovereignty claim.'
          },
          images: [
            { url: 'assets/images/takeshima_day.png', alt: 'Takeshima Day', caption: 'Materials related to Takeshima Day designation' }
          ]
        },
        {
          date: '2012', year: 2012, side: 'both', era: 'contemporary',
          title: 'Presidential Visit & 3rd ICJ Proposal',
          koreaView: {
            title: 'Presidential affirmation of sovereignty',
            text: 'President Lee Myung-bak became the first Korean president to visit Liancourt Rocks, declaring Korea\'s firm territorial sovereignty to the domestic and international community.'
          },
          japanView: {
            title: 'Renewed call for ICJ resolution',
            text: 'Japan characterized the presidential visit as a provocation and proposed a third ICJ referral seeking international legal resolution. Korea again rejected. Korea-Japan relations deteriorated significantly.'
          },
          images: [
            { url: 'assets/images/20130222102054.jpeg', alt: 'President Lee Myung-bak visits Liancourt Rocks', caption: 'President Lee Myung-bak\'s visit to Liancourt Rocks (2012)' }
          ]
        }
      ]
    },
    claims: {
      title: 'Issue-by-Issue Comparison',
      subtitle: 'Key issues in the Liancourt Rocks / Takeshima sovereignty dispute and both countries\' positions',
      koreaLabel: 'Korea\'s Position',
      japanLabel: 'Japan\'s Position',
      analysisLabel: 'Objective Assessment',
      issues: [
        {
          topic: 'Historical Basis for Sovereignty',
          korea: {
            title: 'Historical Precedence (512 AD–)',
            text: 'Since the subjugation of Usan-guk in 512 AD, Usando has appeared continuously in official Joseon-era records (Sejong Sillok Jiriji, Dongguk Yeoji Seungnam, etc.). Korea argues this demonstrates sovereignty predating Japan\'s claim by centuries.'
          },
          japan: {
            title: 'Terra Nullius (1905)',
            text: 'The Japanese government maintains that Takeshima (Liancourt Rocks) was terra nullius — belonging to no state — at the time of its 1905 Cabinet decision, and that its incorporation was a legitimate exercise of sovereignty under international law.'
          },
          koreaWeight: 60,
          analysis: 'Korea\'s historical records predate Japanese claims and are supported by multiple official sources, giving the Korean position a moderate advantage on this issue. However, the interpretive debate over whether "Usando" refers to present-day Liancourt Rocks remains a critical weakness in Korea\'s argument. Japan\'s terra nullius claim has the limitation of inadequately accounting for both countries\' historical records and activities prior to 1905.'
        },
        {
          topic: '17th Century Sovereignty Activities',
          korea: {
            title: 'An Yong-bok\'s Diplomacy (1693–1696)',
            text: 'Korean fisherman An Yong-bok traveled to Japan and asserted Joseon sovereignty over Ulleungdo and Liancourt Rocks. The Tokugawa Shogunate subsequently banned Japanese fishermen from traveling to Ulleungdo. Korea argues this constitutes Japanese acknowledgment of Korean sovereignty.'
          },
          japan: {
            title: '17th Century Fishing Activity',
            text: 'During the Edo period, the Oya and Murakawa families operated with shogunate licenses and used Takeshima as a waypoint and fishing base en route to Ulleungdo. Japan argues this demonstrates practical utilization since the 17th century.'
          },
          koreaWeight: 65,
          analysis: 'Both countries present evidence of 17th-century activities, but the Tokugawa Shogunate\'s official 1696 ban on its own subjects\' voyages to Ulleungdo favors the Korean position. As an official act by Japan\'s own government, it can be interpreted as de facto recognition of Joseon\'s jurisdiction over the area. However, whether this ban explicitly encompassed Liancourt Rocks remains a subject of debate.'
        },
        {
          topic: 'Late 19th–Early 20th Century Official Actions',
          korea: {
            title: 'Dajokan Order (1877) & Imperial Edict No. 41 (1900)',
            text: 'Japan\'s highest governmental body officially determined in 1877 that "Ulleungdo and one other island are not related to Japan." Additionally, the Korean Empire in 1900 established Uldo County with jurisdiction including "Seokdo (石島)." Korea argues Seokdo refers to Liancourt Rocks, proving Korean administration before Japan\'s 1905 incorporation.'
          },
          japan: {
            title: '1905 Cabinet Decision & Administrative Actions',
            text: 'Following the 1905 Cabinet decision incorporating Takeshima into Shimane Prefecture, Japan formally registered the islands, issued sea lion hunting licenses, and conducted surveys — demonstrating administrative governance under legitimate international legal procedures.'
          },
          koreaWeight: 70,
          analysis: 'The Korean position holds a considerable advantage on this issue. The 1877 Dajokan Order — in which Japan\'s own highest governing body officially determined the islands were "not related to Japan" — carries exceptional evidentiary weight precisely because it is a self-incriminating document from the opposing party\'s government. Furthermore, Japan\'s 1905 incorporation occurred during the Russo-Japanese War, when Korea\'s diplomatic sovereignty was being progressively stripped, raising questions about the legitimacy of the process. However, whether "Seokdo" in the 1900 Edict is identical to Liancourt Rocks remains a matter of scholarly debate.'
        },
        {
          topic: 'Post-War International Documents and Treaties',
          korea: {
            title: 'SCAPIN 677 (1946)',
            text: 'The post-WWII Allied directive SCAPIN 677 explicitly excluded Liancourt Rocks from Japanese administrative authority. Korea presents this as evidence that the islands were recognized as Korean territory in the post-war settlement.'
          },
          japan: {
            title: 'SF Peace Treaty (1951) & Rusk Documents',
            text: 'Article 2 of the San Francisco Peace Treaty specified Jeju, Geomundo, and Ulleungdo as territories Japan must renounce, but Takeshima was not included. Additionally, U.S. Assistant Secretary of State Dean Rusk\'s letter to the Korean ambassador stated that "Liancourt Rocks was never treated as part of Korea." Japan considers these significant expressions of Allied recognition.'
          },
          koreaWeight: 45,
          analysis: 'The Japanese position holds a moderate advantage on this issue. The San Francisco Peace Treaty\'s omission of Liancourt Rocks from territories Japan must renounce, combined with the Rusk letter\'s explicit support for Japan\'s position, favor Japan\'s treaty interpretation. However, SCAPIN 677\'s exclusion of the islands from Japanese authority supports Korea, and the Rusk letter represents only the confidential view of a single country rather than a multilateral consensus. Ultimately, no post-war document explicitly settled the final status of the islands.'
        },
        {
          topic: 'Modern Effective Control and International Adjudication',
          korea: {
            title: 'Effective Control (1952–Present)',
            text: 'South Korea has maintained a coast guard garrison on Liancourt Rocks since 1952, constructed a lighthouse and dock facilities, and permitted civilian residence — exercising continuous, peaceful effective control for over 70 years. Korea maintains that Liancourt Rocks is an integral part of its territory with no dispute to resolve.'
          },
          japan: {
            title: 'ICJ Referral Proposals',
            text: 'Japan has proposed referring the dispute to the International Court of Justice three times (1954, 1962, 2012), all rejected by Korea. Japan advocates for peaceful resolution through international law and interprets Korea\'s refusal as suggesting a lack of legal confidence.'
          },
          koreaWeight: 75,
          analysis: 'The Korean position holds a clear advantage on this issue. Over 70 years of effective control is one of the strongest grounds for territorial sovereignty under international law, and Korea meets all substantive requirements — garrison presence, infrastructure construction, and civilian residence. Japan\'s ICJ referral proposals demonstrate a desire for resolution, but ICJ jurisdiction requires mutual consent, making Korea\'s refusal a legitimate exercise of its legal rights. Notably, Japan itself has refused ICJ referral proposals from other countries regarding its own territorial disputes — the Senkaku/Diaoyu Islands (China) and the Kuril Islands/Northern Territories (Russia) — raising questions about the consistency of Japan\'s position on international adjudication. However, Japan\'s continuous protests complicate the question of whether full acquiescence has been established.'
        }
      ]
    },
    law: {
      title: 'International Law Perspectives',
      subtitle: 'International law principles applicable to the Liancourt Rocks / Takeshima dispute and comprehensive assessment',
      principles: [
        {
          title: 'Effective Occupation',
          text: 'One of the most powerful criteria for proving territorial sovereignty under international law. For effective control to be recognized, continuous and peaceful exercise of state functions is required.',
          assessment: 'Korea has fulfilled all requirements for effective control since 1952: garrison presence, lighthouse and dock construction, and civilian residence. However, Japan\'s continuous protests mean the question of whether full acquiescence has been established remains legally contested.',
          favorKorea: true
        },
        {
          title: 'Critical Date',
          text: 'The question of which point in time should serve as the baseline for judgment in a territorial dispute. Actions taken after the critical date are, in principle, of limited legal effect.',
          assessment: 'If 1905 is taken as the critical date, Japan is favored; if 1945 (end of WWII) or 1952 (start of Korean effective control) is used, Korea is favored. The fact that Japan\'s 1905 incorporation occurred amid the colonial subjugation of Korea is an important consideration in determining the critical date.',
          favorKorea: null
        },
        {
          title: 'Terra Nullius',
          text: 'The principle that territory belonging to no state may be incorporated through proper international legal procedures. For such a claim to be valid, it must be proven that the territory was genuinely unclaimed.',
          assessment: 'Japan claims Liancourt Rocks was terra nullius in 1905, but Korean historical records (from 512 AD onward) and Japan\'s own Dajokan Order (1877) provide contrary evidence. The burden of proof for the terra nullius claim rests with Japan, and given the existing historical record, this proof is considerably difficult to establish.',
          favorKorea: true
        },
        {
          title: 'Treaty Interpretation',
          text: 'The 1951 San Francisco Peace Treaty is the key treaty defining Japan\'s post-war territory, but it did not explicitly address Liancourt Rocks\' status, leaving room for interpretation by both sides.',
          assessment: 'The treaty text\'s omission of Liancourt Rocks from territories Japan must renounce favors Japan. However, this must be understood in the context of the impossibility of explicitly listing thousands of islands. SCAPIN 677 (1946) excluding the islands from Japan favors Korea, though it includes the caveat "this is not a final determination."',
          favorKorea: false
        },
        {
          title: 'Intertemporal Law',
          text: 'The principle that the legality of territorial acquisition must be judged according to the international law in force at the time the act took place. This limits retroactive evaluation of historical events by modern standards.',
          assessment: 'While international law in 1905 generally tolerated colonial expansion, modern international law prohibits territorial acquisition through force or coercion. The fact that Japan\'s 1905 incorporation occurred during the Russo-Japanese War and amid the progressive stripping of Korea\'s diplomatic sovereignty raises questions even under intertemporal law analysis.',
          favorKorea: true
        }
      ],
      summary: {
        title: 'Comprehensive Assessment',
        text: 'Analyzing the Liancourt Rocks / Takeshima dispute comprehensively from an international law perspective, Korea is assessed to hold stronger overall legal grounds. Particularly, over 70 years of effective control, the confirmation of non-Japanese territory through Japan\'s own documents such as the Dajokan Order, and the historical context of the 1905 incorporation are key factors favoring Korea. Conversely, the textual interpretation of the San Francisco Peace Treaty and the Rusk documents favor Japan. However, since this dispute has never been adjudicated by the ICJ, no final legal judgment has been rendered. For a peaceful resolution, both countries must continue earnest dialogue grounded in historical facts and international legal principles.'
      }
    },
    conclusion: {
      line1: 'The sovereignty dispute between Korea and Japan over Liancourt Rocks transcends a simple territorial issue — it is a complex conflict involving historical awareness and the interpretation of international law.',
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
  },

  ja: {
    nav: { title: '竹島物語' },
    hero: {
      title: '竹島',
      subtitle: '日本海に浮かぶ美しい島々 ― その歴史をたどる',
      scroll: 'スクロールして探索'
    },
    geo: {
      title: '地理概要',
      map: {
        korea: '大韓民国',
        japan: '日本',
        ulleungdo: '鬱陵島',
        dokdo: '竹島',
        oki: '隠岐諸島',
        sea: '日本海 / 東海'
      },
      fact1: {
        title: '二つの島',
        text: '東島（高さ98.6m）と西島（高さ168.5m）、及び89の付属岩礁で構成されています。二つの島の間隔は約151mです。'
      },
      fact2: {
        title: '総面積',
        text: '187,554 m²（約46エーカー）。東島73,297 m²、西島88,740 m²。二つの島は狭い水路で隔てられています。'
      },
      fact3: {
        title: '火山島の起源',
        text: '約460万年前の海底火山活動により形成された火山島です。鬱陵島より約200万年早く形成され、現在は浸食が進んでいます。'
      },
      fact4: {
        title: '海洋生態系',
        text: '寒流と暖流が交差する潮境水域に位置し、ウミネコ・オオミズナギドリなど希少な海鳥や多様な海洋生物が生息する天然保護区域（天然記念物第336号）です。'
      },
      fact5: {
        title: '気候',
        text: '年間平均気温約12°C、年間降水量約1,324mm。年間を通じて曇りの日が多く霧が頻繁で、冬季には強い北西風の影響を受ける海洋性気候です。'
      },
      fact6: {
        title: '海底地形',
        text: '水深約2,000mの日本海海底からそびえる巨大な海山の頂上部にあたります。海面上に露出している部分は海山全体のごく一部に過ぎません。'
      },
      fact7: {
        title: '現在の状況',
        text: '韓国の竹島警備隊（警察）約40名が常駐し、灯台・接岸施設・ヘリポートを運営しています。1991年から民間人が居住しています。'
      },
      fact8: {
        title: '様々な名称',
        text: '독도/独島（韓国）、竹島（日本）、リアンクール岩礁（国際）。リアンクールは1849年にこの島を発見したフランスの捕鯨船の名前に由来します。'
      }
    },
    timeline: {
      title: '歴史年表',
      coverSubtitle: '竹島をめぐる日韓両国の歴史的記録と見解を年代順にたどります。',
      scrollHint: 'スクロールして探索',
      legendKorea: '韓国側',
      legendJapan: '日本側',
      legendBoth: '両国・国際',
      labelKorea: '韓国側の見解',
      labelJapan: '日本側の見解',
      events: [
        {
          date: '512年', year: 512, side: 'korea', era: 'ancient',
          title: '于山国の服属',
          koreaView: {
            title: '竹島領有権の歴史的出発点',
            text: '新羅の智証王13年、異斯夫が于山国（鬱陵島・于山島を含む）を服属させた。三国史記に記録。于山国に竹島が含まれており、韓国の領有権の歴史的起源とされる。'
          },
          japanView: {
            title: '于山国の範囲に関する疑問',
            text: '于山国が鬱陵島のみを指すのか、竹島まで含むのかは歴史的に不明確である。6世紀の記録だけでは竹島の領有権を主張することは困難である。'
          },
          image: { url: 'assets/images/three_kingdom.jpeg', alt: '三国史記 新羅本紀', caption: '三国史記 新羅本紀 ― 于山国服属の記録', credit: '延世大学校所蔵' }
        },
        {
          date: '1145年', year: 1145, side: 'korea', era: 'ancient',
          title: '三国史記の編纂',
          koreaView: {
            title: '公式歴史書の記録',
            text: '金富軾が編纂した三国史記に512年の于山国服属の事実が公式に記録された。韓国が竹島領有権の歴史的出発点として提示する核心的文献。'
          },
          japanView: {
            title: '竹島との関連性の欠如',
            text: '三国史記の于山国関連記録には竹島に関する具体的な言及がなく、鬱陵島の服属記録が竹島の領有権の根拠となることは困難である。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Samguk.JPG', alt: '三国史記', caption: '三国史記原本', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1454年', year: 1454, side: 'korea', era: 'ancient',
          title: '世宗実録地理志',
          koreaView: {
            title: '二つの島の存在確認',
            text: '「于山と武陵の二島が県の東の海にある。天候が晴れれば互いに望み見ることができる。」于山島が竹島を指す明白な記録。'
          },
          japanView: {
            title: '地理的記述の不一致',
            text: '「晴れた日に互いに見える」という記述は、鬱陵島から竹島までの実際の距離（約87km）と可視性の条件に合致しない。于山島は鬱陵島の付属島である可能性がある。'
          },
          images: [
            { url: 'assets/images/sejong_jiriji.jpeg', alt: '世宗実録地理志', caption: '世宗実録地理志原文' },
            { url: 'assets/images/dokdo_from_uleung01.png', alt: '鬱陵島から見た竹島', caption: '鬱陵島から望む竹島' },
            { url: 'assets/images/dokdo_from_uleung02.png', alt: '鬱陵島から見た竹島', caption: '鬱陵島から望む竹島（夜明け）' }
          ]
        },
        {
          date: '1531年', year: 1531, side: 'korea', era: 'ancient',
          title: '新増東国輿地勝覧',
          koreaView: {
            title: '官撰地理書の根拠',
            text: '朝鮮の官撰地理書として于山島と鬱陵島を地図に併記。朝鮮が竹島の存在を認識し自国領土として管理していたことを示す古文献上の根拠。'
          },
          japanView: {
            title: '地図上の位置の誤り',
            text: '八道総図では于山島が鬱陵島の西側（朝鮮半島側）に描かれており、実際に東南に位置する竹島とは一致しない。于山島が竹島であるか疑問が残る。'
          },
          images: [
            { url: 'assets/images/new_dongguk_yeoji.jpeg', alt: '新増東国輿地勝覧', caption: '新増東国輿地勝覧原文' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ulleungdo_and_Usando.jpg', alt: '八道総図', caption: '八道総図 - 鬱陵島と于山島 (1530)', credit: 'Wikimedia Commons, Public Domain' }
          ]
        },
        {
          date: '1618年', year: 1618, side: 'japan', era: 'edo',
          title: '大谷・村川渡海免許',
          koreaView: {
            title: '外国領土認識の証拠',
            text: '「渡海免許」は外国領土への航海に発給されるものであり、幕府が鬱陵島を日本領土ではなく外国として認識していたことをむしろ証明している。'
          },
          japanView: {
            title: '17世紀の領有活動の根拠',
            text: '江戸幕府が大谷・村川両家に渡海免許を発給し、竹島（鬱陵島）及び松島（竹島）を経由地かつ漁業根拠地として活用。17世紀からの実効的利用の証拠。'
          },
          images: [
            { url: 'assets/images/oya_murakawa.png', alt: '大谷・村川渡海免許', caption: '大谷・村川渡海免許原文' }
          ]
        },
        {
          date: '1667年', year: 1667, side: 'japan', era: 'edo',
          title: '隠州視聴合記',
          koreaView: {
            title: '日本領土外の確認',
            text: '「日本の西北の限りはこの州（隠岐島）をもって境とす」という記述は、鬱陵島と竹島が日本領土の外にあることを日本人自ら確認したもの。'
          },
          japanView: {
            title: '竹島認知の証拠',
            text: '隠州視聴合記に松島（竹島）と竹島（鬱陵島）に関する詳細な記述があり、17世紀に日本が竹島の存在と位置を正確に認知していたことを証明している。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Eunju2.jpg', alt: '隠州視聴合記の地図', caption: '隠州視聴合記収録地図 (1667)', credit: 'Wikimedia Commons, CC BY-SA 4.0' }
        },
        {
          date: '1693年', year: 1693, side: 'both', era: 'edo',
          title: '安龍福渡日と鬱陵島争界',
          koreaView: {
            title: '領有権の外交的確認',
            text: '朝鮮の漁師・安龍福が日本に渡り、鬱陵島・竹島の朝鮮領有権を主張し、日本側から確認を得た。日朝外交紛争の契機となった。'
          },
          japanView: {
            title: '安龍福の証言の信憑性問題',
            text: '安龍福の渡日経緯と日本側との交渉内容には誇張が多く、朝鮮側記録と日本側記録が矛盾している。公式外交文書としての価値は低い。'
          },
          images: [
            { url: 'assets/images/bakufu-published-document.png', alt: '幕府公文書', caption: '鬱陵島争界関連幕府公文書' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Old_Map_of_Liancourt_Rocks.jpg', alt: '17世紀の航路図', caption: '隠岐諸島から鬱陵島・竹島への航路を示す17世紀の日本地図', credit: 'Wikimedia Commons, Public Domain' }
          ]
        },
        {
          date: '1696年', year: 1696, side: 'both', era: 'edo',
          title: '鬱陵島渡海禁止令',
          koreaView: {
            title: '朝鮮領有権認定の決定的証拠',
            text: '徳川幕府が日本漁民の鬱陵島渡海を公式に禁止。日本政府が鬱陵島・竹島の朝鮮領有権を認定した決定的証拠。'
          },
          japanView: {
            title: '鬱陵島に限定された禁止',
            text: '渡海禁止令は竹島（鬱陵島）に対するものであり、松島（竹島）への渡海は禁止されていない。竹島に対する日本の領有意思は維持された。'
          },
          images: [
            { url: 'assets/images/toukai_kinshirei.png', alt: '鬱陵島渡海禁止令', caption: '鬱陵島渡海禁止令原文' }
          ]
        },
        {
          date: '1770年', year: 1770, side: 'korea', era: 'edo',
          title: '東国文献備考',
          koreaView: {
            title: '于山島＝竹島の決定的記録',
            text: '「于山はすなわち倭人が言う松島である」と明記。于山島が竹島であることを確認する最も直接的な記録。'
          },
          japanView: {
            title: '後代の注釈の正確性に疑問',
            text: '東国文献備考の当該記述は編纂者の注釈であり、元の資料に基づいているか不明確。後代の解釈が歴史的事実を立証することは困難である。'
          },
          images: [
            { url: 'assets/images/dongguk_munheon_bigo.jpeg', alt: '東国文献備考', caption: '東国文献備考原文' }
          ]
        },
        {
          date: '1877年', year: 1877, side: 'both', era: 'imperial',
          title: '太政官指令',
          koreaView: {
            title: '日本最高機関による領土外確認',
            text: '日本の最高国家機関である太政官が「鬱陵島とその外一島は日本と関係なし」と公式決定。日本自らが竹島の非日本領土性を確認した最も強力な根拠。'
          },
          japanView: {
            title: '「外一島」の解釈問題',
            text: '太政官文書の「その外一島」が現在の竹島を指すのか、当時の地名混乱（竹島/松島の混用）の中で他の島である可能性もある。'
          },
          images: [
            { url: 'assets/images/view0503_img01_b.jpg', alt: '太政官指令文書', caption: '太政官指令原文' },
            { url: 'assets/images/view0503_img02_b (1).jpg', alt: '太政官指令添付文書', caption: '太政官指令添付文書' }
          ]
        },
        {
          date: '1900年', year: 1900, side: 'korea', era: 'imperial',
          title: '大韓帝国勅令第41号',
          koreaView: {
            title: '1905年以前の公式管轄',
            text: '鬱島郡を設置し管轄に「石島」を含めた。石島は竹島の当時の名称であり、日本の1905年編入以前に韓国が竹島を公式に管轄していた証拠。'
          },
          japanView: {
            title: '「石島＝竹島」の根拠不十分',
            text: '「石島」が竹島を指すという直接的な証拠が不足している。石島と竹島の発音・表記上の関連性が不明確であり、当時鬱島郡が竹島を実際に管轄していた記録もない。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Royal_Decree_No.41.jpg', alt: '大韓帝国勅令第41号', caption: '大韓帝国勅令第41号原本 (1900)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1905年', year: 1905, side: 'japan', era: 'imperial',
          title: '島根県編入',
          koreaView: {
            title: '韓半島侵奪の一環',
            text: '乙巳条約（1905年11月）直前の1905年1月に行われた編入は韓半島侵奪過程の一環。竹島は無主地ではなく既に韓国の領土であったため、違法な強奪である。'
          },
          japanView: {
            title: '国際法上の合法的編入',
            text: '日本政府の閣議決定により、無主地である竹島を国際法の原則に従い合法的に島根県に編入。朝鮮半島の併合（1910年）とは別個の独立した措置。'
          },
          images: [
            { url: 'assets/images/takeshima01-0310.jpg', alt: '島根県告示第40号', caption: '島根県告示第40号 (1905)' }
          ]
        },
        {
          date: '1906年', year: 1906, side: 'korea', era: 'imperial',
          title: '沈興沢報告書',
          koreaView: {
            title: '即時の抗議と竹島認識',
            text: '鬱島郡守・沈興沢が日本の竹島編入を知り、即座に中央政府に報告。大韓帝国は抗議したが、乙巳条約により外交権が剥奪された状態であった。'
          },
          japanView: {
            title: '実効的対応の不在',
            text: '大韓帝国の抗議は既に外交権を喪失した状態での形式的反応であり、編入に対する具体的な法的異議申立てや国際的抗議は行われなかった。'
          },
          images: [
            { url: 'assets/images/daehanilbo-article.jpg', alt: '大韓日報記事', caption: '沈興沢報告に関する大韓日報記事' }
          ]
        },
        {
          date: '1945年', year: 1945, side: 'both', era: 'modern',
          title: '日本の敗戦',
          koreaView: {
            title: '植民地領土の返還',
            text: '日本の無条件降伏とポツダム宣言の受諾。カイロ宣言（1943年）で「暴力及び貪欲により奪取した全ての地域」の返還を規定し、竹島もこれに該当する。'
          },
          japanView: {
            title: '戦後領土処理の開始',
            text: 'ポツダム宣言に基づき日本の主権は本土4島と連合国が決定する諸島に限定された。竹島の最終的帰属は講和条約で決定される事案であった。'
          },
          images: [
            { url: 'assets/images/58365_201801251132046430.png', alt: 'ポツダム宣言受諾勅令', caption: 'ポツダム宣言受諾に伴う命令に関する件（1945年勅令第542号）' }
          ]
        },
        {
          date: '1946年', year: 1946, side: 'both', era: 'modern',
          title: 'SCAPIN 677',
          koreaView: {
            title: '竹島の日本行政権からの除外',
            text: '連合国最高司令部が竹島を日本の行政権から明示的に除外。戦後処理において竹島が韓国領土として認定された証拠。'
          },
          japanView: {
            title: '暫定的行政措置に過ぎない',
            text: 'SCAPIN 677は「領土の最終的決定ではない」という但し書きを明記。占領期の暫定的行政措置であり、領土主権の最終決定は講和条約に委ねられた。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/SCAPIN_677_lq.jpg', alt: 'SCAPIN 677 行政区域地図', caption: 'SCAPIN 677に基づく日本行政区域地図 (1946)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1951年', year: 1951, side: 'both', era: 'modern',
          title: 'SF講和条約とラスク書簡',
          koreaView: {
            title: '竹島の不記載は脱漏',
            text: 'サンフランシスコ講和条約で竹島が放棄領土に含まれなかったのは単なる脱漏。SCAPIN 677で既に竹島が韓国領土であることが確認されていたため、別途明記は不要であった。'
          },
          japanView: {
            title: '放棄対象からの除外＝日本領土',
            text: '条約第2条で放棄領土として済州島・巨文島・鬱陵島を明記したが、竹島は除外された。ラスク書簡でも米国は「竹島は韓国の領土として扱われたことはない」と確認。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Treaty_of_peace_with_japan.jpg', alt: 'サンフランシスコ講和条約署名', caption: 'ディーン・アチソン米国務長官の講和条約署名 (1951)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1952年', year: 1952, side: 'korea', era: 'modern',
          title: '李承晩ライン宣言',
          koreaView: {
            title: '主権的権利の行使',
            text: '大韓民国が「平和線」を宣言し竹島を韓国側水域に含めた。国際法上の隣接海洋に対する主権的権利の行使であり、竹島の実効的支配の本格的な開始。'
          },
          japanView: {
            title: '国際法違反の一方的宣言',
            text: '李承晩ラインは公海上の一方的管轄権主張であり国際法に違反。竹島に対する韓国の不法占拠が始まった起点。'
          },
          image: { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Syngman_Rhee_Line_map.jpg', alt: '李承晩ライン地図', caption: '平和線（李承晩ライン）公式地図 (1952)', credit: 'Wikimedia Commons, Public Domain' }
        },
        {
          date: '1953年', year: 1953, side: 'korea', era: 'modern',
          title: '竹島義勇守備隊',
          koreaView: {
            title: '竹島守護の象徴',
            text: '民間人33名で構成された義勇守備隊が竹島に駐留。1956年に警察に任務を引き継ぐまで竹島を守備。国民的な竹島守護意志の象徴。'
          },
          japanView: {
            title: '武力占拠の証拠',
            text: '韓国民間人の武装駐留は平和的領土管理ではなく武力による占拠。日本漁民や海上保安庁巡視船に対する発砲事件も発生した。'
          },
          images: [
            { url: 'assets/images/K0000002_0091000001200503030304_31_1[W680-].jpg', alt: '竹島義勇守備隊', caption: '竹島義勇守備隊の集合写真' }
          ]
        },
        {
          date: '1954年', year: 1954, side: 'japan', era: 'modern',
          title: '第1次ICJ付託提案',
          koreaView: {
            title: '紛争自体が存在しない',
            text: '竹島は紛争対象ではなく韓国固有の領土。ICJ付託は竹島を紛争地域に格上げしようとする日本の戦略であるため拒否。'
          },
          japanView: {
            title: '国際法に基づく平和的解決',
            text: '日本は竹島問題を国際司法裁判所（ICJ）に付託し、国際法に基づく平和的解決を追求。韓国の拒否は法的根拠に対する自信の欠如を示唆している。'
          },
          images: [
            { url: 'assets/images/icj01_01.png', alt: 'ICJ付託提案文書1', caption: '第1次ICJ付託提案文書' },
            { url: 'assets/images/icj01_02.png', alt: 'ICJ付託提案文書2', caption: '第1次ICJ付託提案文書（2）' }
          ]
        },
        {
          date: '1965年', year: 1965, side: 'both', era: 'modern',
          title: '日韓基本条約',
          koreaView: {
            title: '竹島は交渉の対象ではない',
            text: '日韓国交正常化の過程で竹島問題は議題として扱われなかった。竹島は韓国の固有領土であるため、交渉の対象にはなり得ないという立場。'
          },
          japanView: {
            title: '未解決のまま留保',
            text: '国交正常化のため竹島問題は未解決のまま残すことで合意。「紛争は外交で解決する」という包括条項に含まれる。'
          },
          images: [
            { url: 'assets/images/A_copy_of_Treaty_on_Basic_Relations_between_Japan_and_the_Republic_of_Korea.jpg', alt: '日韓基本条約', caption: '日韓基本条約原本' }
          ]
        },
        {
          date: '2005年', year: 2005, side: 'japan', era: 'contemporary',
          title: '竹島の日の制定',
          koreaView: {
            title: '歴史歪曲と挑発',
            text: '島根県の「竹島の日」制定は日本の竹島侵奪の歴史を美化する挑発的行為。韓国政府と国民が強く反発し、外交的対立が深化した。'
          },
          japanView: {
            title: '領有権主張の表明',
            text: '1905年の閣議決定による島根県編入100周年を記念し、2月22日を「竹島の日」に制定。日本の正当な領有権主張の平和的な表明。'
          },
          images: [
            { url: 'assets/images/takeshima_day.png', alt: '竹島の日', caption: '竹島の日制定関連資料' }
          ]
        },
        {
          date: '2012年', year: 2012, side: 'both', era: 'contemporary',
          title: '李明博竹島訪問と第3次ICJ提案',
          koreaView: {
            title: '大統領による主権確認',
            text: '大韓民国大統領として初めて竹島を訪問。竹島に対する韓国の確固たる領土主権を国内外に宣言した歴史的行動。'
          },
          japanView: {
            title: 'ICJを通じた解決の再要求',
            text: '韓国大統領の竹島訪問を挑発と規定。日本は第3次ICJ付託を提案し国際法的解決を再度求めたが韓国が拒否。日韓関係が大幅に悪化した。'
          },
          images: [
            { url: 'assets/images/20130222102054.jpeg', alt: '李明博大統領の竹島訪問', caption: '李明博大統領の竹島訪問 (2012)' }
          ]
        }
      ]
    },
    claims: {
      title: '争点別比較',
      subtitle: '竹島領有権紛争の核心的争点と両国の立場',
      koreaLabel: '韓国の立場',
      japanLabel: '日本の立場',
      analysisLabel: '客観的評価',
      issues: [
        {
          topic: '歴史的領有権の根拠',
          korea: {
            title: '歴史的先占（512年〜）',
            text: '512年の新羅による于山国服属以来、朝鮮時代の官撰記録（世宗実録地理志、東国輿地勝覧等）に于山島が継続的に登場します。これは韓国が日本より数世紀先んじて竹島を認知・領有してきたことを示しています。'
          },
          japan: {
            title: '無主地の先占（1905年）',
            text: '日本政府は、竹島が1905年の閣議決定当時どの国にも属さない無主地（terra nullius）であり、国際法の原則に従い合法的に領土に編入したものであると主張しています。'
          },
          koreaWeight: 60,
          analysis: '韓国の古文献記録は時期的に先行しており、複数の官撰史料がこれを裏付けている点で、韓国側の主張がやや優位にあります。ただし、「于山島」が現在の竹島と同一の島であるかについての解釈論争が韓国側主張の決定的な弱点です。一方、日本の無主地主張は、1905年以前の両国の歴史的記録と活動を十分に説明できないという限界があります。'
        },
        {
          topic: '17世紀の領有権活動',
          korea: {
            title: '安龍福の外交活動（1693〜1696年）',
            text: '朝鮮の漁師・安龍福は日本に渡り、鬱陵島と竹島が朝鮮の領土であることを主張しました。その後、徳川幕府は日本漁民の鬱陵島渡海を禁止する措置を取りました。これは当時の日本政府もこれらの島の朝鮮領有権を認めたものだと韓国は主張しています。'
          },
          japan: {
            title: '17世紀の漁業活動',
            text: '江戸時代、大谷家と村川家が幕府の許可を得て鬱陵島へ向かう途中、竹島を中間寄港地かつ漁業根拠地として利用していたと主張しています。これは日本が17世紀から竹島を実質的に活用していたことを示すとしています。'
          },
          koreaWeight: 65,
          analysis: '両国とも17世紀の活動証拠を提示していますが、1696年に徳川幕府が自国民の鬱陵島渡海を公式に禁止したという事実は韓国側に有利な根拠です。この禁止令は日本政府自体の公式行為として、当該水域に対する朝鮮の管轄を事実上認めたものと解釈される余地が大きいです。ただし、この禁止令が竹島まで明示的に含むかどうかは依然として議論の対象です。'
        },
        {
          topic: '19世紀末〜20世紀初頭の公式措置',
          korea: {
            title: '太政官指令（1877年）・勅令第41号（1900年）',
            text: '日本の最高国家機関であった太政官が1877年に「鬱陵島とその外一島は日本と関係なし」と公式決定しました。また、1900年に大韓帝国が鬱島郡を設置し管轄に「石島」を含めました。韓国側は石島が竹島の当時の名称であると主張し、日本の1905年編入以前に韓国が既に竹島を公式に管轄していたことを示すとしています。'
          },
          japan: {
            title: '1905年閣議決定・行政的措置',
            text: '1905年の閣議決定により竹島を島根県に編入した後、正式登録、アシカ捕獲許可の発給、測量の実施などの行政的管轄行為を行いました。日本はこの編入が国際法上の合法的手続きに従ったものであると主張しています。'
          },
          koreaWeight: 70,
          analysis: 'この争点では韓国側の主張がかなり優位にあります。1877年の太政官指令は、日本の最高国家機関自らが「日本と関係なし」と公式決定した文書であり、相手国の文書ではなく自国政府の文書であるという点で証拠力が極めて高いです。また、日本の1905年編入は日露戦争中に韓国の外交権が事実上剥奪されていく時期に行われたという歴史的文脈がその合法性に疑問を投げかけています。ただし、勅令第41号の「石島」が竹島と同一であるかは依然として学術的論争の対象です。'
        },
        {
          topic: '戦後の国際文書と条約',
          korea: {
            title: 'SCAPIN 677（1946年）',
            text: '第二次世界大戦終結後、連合国最高司令部が発したSCAPIN 677は竹島を日本の行政権から明示的に除外しました。韓国はこれを戦後処理において竹島が韓国領土として認定された証拠として提示しています。'
          },
          japan: {
            title: 'SF講和条約（1951年）・ラスク書簡',
            text: 'サンフランシスコ講和条約第2条で日本が放棄する領土として済州島・巨文島・鬱陵島を明記しましたが、竹島は放棄対象に含まれませんでした。また、米国国務次官補ディーン・ラスクが韓国大使に送った書簡で「竹島は韓国の領土として扱われたことはない」と述べており、日本はこれらを連合国の公式認識として重視しています。'
          },
          koreaWeight: 45,
          analysis: 'この争点では日本側の主張がやや優位にあります。サンフランシスコ講和条約で竹島が日本の放棄対象に明記されなかった点と、ラスク書簡が明示的に日本の立場を支持している点は、条約解釈上日本に有利です。ただし、SCAPIN 677が竹島を日本の行政権から除外したことは韓国に有利な根拠であり、ラスク書簡はアメリカ一国の非公開意見に過ぎないという反論もあります。究極的にはいずれの文書も竹島の最終的地位を明示的に確定していません。'
        },
        {
          topic: '現代の実効的支配と国際裁判',
          korea: {
            title: '実効的支配（1952年〜現在）',
            text: '大韓民国は1952年以来、竹島に警備隊を駐留させ、灯台・接岸施設等を建設し、民間人の居住を許可するなど、持続的かつ平和的な実効的支配を行使しています。韓国は竹島が紛争自体が存在しない固有の領土であるという立場です。'
          },
          japan: {
            title: 'ICJ付託提案',
            text: '日本はこの紛争を国際司法裁判所（ICJ）に3回（1954年、1962年、2012年）付託することを提案しましたが、韓国は全て拒否しました。日本は国際法による平和的解決を追求する立場であり、韓国の拒否を法的自信の欠如と解釈しています。'
          },
          koreaWeight: 75,
          analysis: 'この争点では韓国側が明確に優位にあります。70年以上の実効的支配は国際法上の領土主権を立証する最も強力な根拠の一つであり、韓国は警備隊の駐留、施設の建設、住民の居住など実質的な主権行使の全ての要件を備えています。日本のICJ付託提案は紛争解決の意思を示すものですが、ICJの管轄権は両国の合意を必要とするため、韓国の拒否自体は国際法上正当な権利です。なお、日本自身も他の領土紛争——尖閣諸島/釣魚島（中国）およびクリル諸島/北方領土（ロシア）——では相手国のICJ付託提案を拒否しており、国際裁判をめぐる日本の立場には一貫性の問題が存在します。ただし、日本の継続的な抗議により、黙認（acquiescence）が完全に成立したと断定することは困難です。'
        }
      ]
    },
    law: {
      title: '国際法的観点',
      subtitle: '竹島紛争に適用される国際法原則と総合評価',
      principles: [
        {
          title: '実効的支配（Effective Occupation）',
          text: '国際法上、領土主権を立証する最も強力な基準の一つです。実効的支配が認められるには、国家機能の持続的かつ平和的な行使が必要です。',
          assessment: '韓国は1952年以来、警備隊の駐留、灯台・接岸施設の建設、民間人の居住許可など、実効的支配の全ての要件を満たしています。ただし、日本の継続的な抗議により、黙認（acquiescence）の完全な成立については法的に論争中です。',
          favorKorea: true
        },
        {
          title: '決定的期日（Critical Date）',
          text: '領土紛争においてどの時点の状況を判断基準とするかという問題です。決定的期日以降の行為は原則として法的効力が制限されます。',
          assessment: '1905年を基準とすれば日本に有利であり、1945年（終戦）または1952年（韓国の実効的支配開始）を基準とすれば韓国に有利です。日本の1905年編入が韓国の植民地化過程で行われたという事実は、決定的期日の設定において重要な考慮要素です。',
          favorKorea: null
        },
        {
          title: '無主地先占（Terra Nullius）',
          text: 'いずれの国にも属さない無主地を国際法の手続きに従い編入できるという原則です。先占が有効であるためには、当該領土が実際に無主地であったことが立証されなければなりません。',
          assessment: '日本は1905年に竹島が無主地であったと主張していますが、韓国の歴史的記録（512年以降）および日本自体の太政官指令（1877年）がこれに反する証拠を提供しています。無主地主張の立証責任は日本にあり、現存する史料に照らしてこの立証はかなり困難です。',
          favorKorea: true
        },
        {
          title: '条約解釈（Treaty Interpretation）',
          text: '1951年のサンフランシスコ講和条約は日本の戦後領土を確定した核心条約ですが、竹島の帰属を明示的に言及しておらず、両国いずれにも解釈の余地を残しています。',
          assessment: '条約の文面上、竹島が日本の放棄対象に含まれていない点は日本に有利ですが、これは数千の島嶼を明示的に列挙することが不可能であったという文脈で理解すべきです。SCAPIN 677（1946年）が竹島を日本から除外した点は韓国に有利ですが、「最終決定ではない」という但し書きがあります。',
          favorKorea: false
        },
        {
          title: '時際法（Intertemporal Law）',
          text: '領土取得の合法性は、当該行為が行われた時点の国際法に従って判断すべきという原則です。歴史的事件を現代の基準で遡及的に評価することを制限します。',
          assessment: '1905年当時の国際法は植民地拡張を一般的に容認していましたが、現代国際法は武力や強制による領土取得を禁止しています。日本の1905年編入が日露戦争中に韓国の外交権剥奪という強制的状況下で行われたという点は、時際法の適用においても問題を提起します。',
          favorKorea: true
        }
      ],
      summary: {
        title: '総合評価',
        text: '国際法的観点から竹島紛争を総合的に分析すると、韓国側が全般的により強い法的根拠を保有していると評価されます。特に70年以上の実効的支配、太政官指令など日本自体の文書による非日本領土確認、そして1905年編入の歴史的文脈が韓国に有利な核心的根拠です。一方、サンフランシスコ講和条約の文面解釈とラスク書簡は日本に有利な根拠です。ただし、この紛争が実際にICJで扱われたことがないため、最終的な法的判断は下されていません。領土紛争の平和的解決のためには、両国が歴史的事実と国際法原則に基づいた真摯な対話を続けていく必要があります。'
      }
    },
    conclusion: {
      line1: '竹島をめぐる日韓間の領有権紛争は、単なる領土問題を超えた、歴史認識と国際法解釈の複合的な対立です。',
      line2: '両国の主張を客観的に理解することは、平和的解決に向けた第一歩です。',
      line3: '歴史的事実に基づく対話と相互尊重のみが、北東アジアの持続可能な平和を築くことができます。',
      sourcesTitle: '参考資料',
      source5: '太政官指令（1877年）',
      source6: '大韓帝国勅令第41号（1900年）'
    },
    footer: {
      text: 'このウェブサイトは教育目的で制作されたものであり、両国の視点を客観的に伝えることを目指しています。'
    },
    dots: ['ホーム', '地理', '年表', '韓国', '日本', '国際法', '結論']
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
  document.body.classList.remove('lang-ko', 'lang-en', 'lang-ja');
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
  const jaOption = document.querySelector('.lang-toggle__option--ja');
  if (koOption) koOption.classList.toggle('active', lang === 'ko');
  if (enOption) enOption.classList.toggle('active', lang === 'en');
  if (jaOption) jaOption.classList.toggle('active', lang === 'ja');

  // Re-render dynamic content
  renderTimeline(lang);
  renderClaimsSection(lang);
  renderLawSection(lang);
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
    if (evt.images && evt.images.length) {
      imageHtml = '<div class="tl-slide__image tl-slide__image--gallery">'
        + evt.images.map(function(img) {
          return '<figure class="tl-slide__gallery-item">'
            + '<img src="' + img.url + '" alt="' + (img.alt || '') + '" loading="lazy"'
            + ' data-lightbox="' + img.url + '"'
            + ' data-lightbox-caption="' + (img.caption || '') + '"'
            + ' data-lightbox-credit="' + (img.credit || '') + '"'
            + ' onclick="window._openLightbox(this)" />'
            + '<figcaption class="tl-slide__image-caption">' + (img.caption || '') + '</figcaption>'
            + '</figure>';
        }).join('')
        + '</div>';
    } else if (evt.image && evt.image.url) {
      imageHtml = '<div class="tl-slide__image">'
        + '<img src="' + evt.image.url + '" alt="' + (evt.image.alt || '') + '" loading="lazy"'
        + ' data-lightbox="' + evt.image.url + '"'
        + ' data-lightbox-caption="' + (evt.image.caption || '') + '"'
        + ' data-lightbox-credit="' + (evt.image.credit || '') + '"'
        + ' onclick="window._openLightbox(this)" />'
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

function renderClaimsSection(lang) {
  const data = translations[lang].claims;
  const container = document.getElementById('claims-container');
  if (!container || !data) return;

  container.innerHTML = data.issues.map((issue, i) => `
    <div class="claims-issue">
      <div class="claims-issue__header">
        <span class="claims-issue__number">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="claims-issue__topic">${issue.topic}</h3>
      </div>
      <div class="claims-columns">
        <div class="claims-col claims-col--korea">
          <div class="claims-col__label">${data.koreaLabel}</div>
          <h4 class="claims-col__title">${issue.korea.title}</h4>
          <p class="claims-col__text">${issue.korea.text}</p>
        </div>
        <div class="claims-col claims-col--japan">
          <div class="claims-col__label">${data.japanLabel}</div>
          <h4 class="claims-col__title">${issue.japan.title}</h4>
          <p class="claims-col__text">${issue.japan.text}</p>
        </div>
      </div>
      <div class="claims-analysis">
        <div class="claims-analysis__label">
          <svg class="claims-analysis__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M4 7l4 8H0L4 7zm16 0l4 8h-8l4-8zM2 3h20"/></svg>
          ${data.analysisLabel}
        </div>
        <div class="claims-meter">
          <span class="claims-meter__label claims-meter__label--korea">${data.koreaLabel} ${issue.koreaWeight}%</span>
          <div class="claims-meter__bar">
            <div class="claims-meter__fill claims-meter__fill--korea" data-target-width="${issue.koreaWeight}" style="width:0%"></div>
            <div class="claims-meter__fill claims-meter__fill--japan" data-target-width="${100 - issue.koreaWeight}" style="width:0%"></div>
          </div>
          <span class="claims-meter__label claims-meter__label--japan">${100 - issue.koreaWeight}% ${data.japanLabel}</span>
        </div>
        <p class="claims-analysis__text">${issue.analysis}</p>
      </div>
    </div>
  `).join('');

  // If reduced motion, set meter fills to final width immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.querySelectorAll('.claims-meter__fill--korea, .claims-meter__fill--japan').forEach(fill => {
      const target = fill.getAttribute('data-target-width');
      if (target) fill.style.width = target + '%';
    });
  }
}

function renderLawSection(lang) {
  const law = translations[lang].law;

  // Render principles
  const principlesContainer = document.getElementById('law-principles');
  if (principlesContainer) {
    principlesContainer.innerHTML = law.principles.map(p => {
      const indicatorClass = p.favorKorea === true ? 'law__indicator--korea'
        : p.favorKorea === false ? 'law__indicator--japan'
        : 'law__indicator--neutral';
      const favorClass = p.favorKorea === true ? 'law__principle--favor-korea'
        : p.favorKorea === false ? 'law__principle--favor-japan'
        : '';
      const indicatorLabel = p.favorKorea === true
        ? (lang === 'ko' ? '&#9664; 한국 유리' : lang === 'ja' ? '&#9664; 韓国有利' : '&#9664; Favors Korea')
        : p.favorKorea === false
        ? (lang === 'ko' ? '일본 유리 &#9654;' : lang === 'ja' ? '日本有利 &#9654;' : 'Favors Japan &#9654;')
        : (lang === 'ko' ? '&#9670; 중립' : lang === 'ja' ? '&#9670; 中立' : '&#9670; Neutral');
      return `
      <div class="law__principle ${favorClass}">
        <div class="law__principle-header">
          <div class="law__principle-title">${p.title}</div>
          <span class="law__indicator ${indicatorClass}">${indicatorLabel}</span>
        </div>
        <p class="law__principle-text">${p.text}</p>
        <p class="law__principle-assessment">${p.assessment}</p>
      </div>`;
    }).join('');
  }

  // Render summary
  const summaryContainer = document.getElementById('law-summary');
  if (summaryContainer && law.summary) {
    summaryContainer.innerHTML = `
      <div class="law__summary-box">
        <h3 class="law__summary-title">${law.summary.title}</h3>
        <p class="law__summary-text">${law.summary.text}</p>
      </div>`;
  }
}

/* --- Initialize --- */
function initI18n() {
  // Set up language toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      var langs = ['ko', 'en', 'ja'];
      var idx = langs.indexOf(currentLang);
      const newLang = langs[(idx + 1) % langs.length];

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
