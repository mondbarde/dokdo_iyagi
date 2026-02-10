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
      events: [
        {
          date: '512년',
          title: '우산국 복속',
          text: '신라 지증왕 13년, 이사부가 우산국(울릉도·우산도 포함)을 복속시킴. 삼국사기에 기록.'
        },
        {
          date: '1454년',
          title: '세종실록지리지',
          text: '"우산과 무릉 두 섬이 현의 동쪽 바다에 있다. 날씨가 맑으면 서로 바라볼 수 있다." 우산도를 독도로 해석하는 것이 한국 측 입장.'
        },
        {
          date: '1693~1696년',
          title: '안용복 사건',
          text: '조선 어부 안용복이 일본에 건너가 울릉도·독도의 조선 영유권을 주장. 이후 도쿠가와 막부가 일본 어민의 울릉도 도해를 금지(1696년).'
        },
        {
          date: '1877년',
          title: '태정관지령',
          text: '일본 최고 국가기관 태정관이 "울릉도와 그 외 1도(독도)는 일본과 관계없다"고 결정. 한국 측이 가장 강력한 근거로 제시하는 문서.'
        },
        {
          date: '1900년',
          title: '대한제국 칙령 제41호',
          text: '울도군을 설치하고 관할 구역에 "석도(石島)"를 포함. 한국 측은 석도를 독도로 해석.'
        },
        {
          date: '1905년',
          title: '시마네현 편입',
          text: '일본 각의 결정으로 "다케시마"를 시마네현에 편입. 일본은 무주지 선점이라 주장, 한국은 한일 강제병합의 일환으로 봄.'
        },
        {
          date: '1945년',
          title: 'SCAPIN 677',
          text: '일본 패전 후 연합군 사령부가 독도를 일본의 행정권에서 명시적으로 제외. 단, "영토 최종 결정이 아님"이라는 단서 포함.'
        },
        {
          date: '1951년',
          title: '샌프란시스코 강화조약',
          text: '일본이 포기할 영토에 제주도·거문도·울릉도를 명시했으나 독도는 언급하지 않음. 양측 모두 자국에 유리하게 해석.'
        },
        {
          date: '1952년',
          title: '이승만 라인 선포',
          text: '대한민국이 "평화선"을 선포하여 독도를 한국 측 수역에 포함. 이후 한국이 독도에 대한 실효적 지배를 시작.'
        },
        {
          date: '1954년~현재',
          title: 'ICJ 제소 제안과 지속적 분쟁',
          text: '일본이 국제사법재판소(ICJ) 회부를 세 차례(1954, 1962, 2012) 제안했으나 한국은 모두 거부. 한국은 독도에 경비대를 주둔시키며 실효적 지배를 지속 중.'
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
      events: [
        {
          date: '512 AD',
          title: 'Subjugation of Usan-guk',
          text: 'Under King Jijeung of Silla, General Isabu subjugated Usan-guk (including Ulleungdo and Usando). Recorded in the Samguk Sagi.'
        },
        {
          date: '1454',
          title: 'Sejong Sillok Jiriji',
          text: '"The two islands of Usan and Mureung are in the sea east of the county. On clear days, they can be seen from each other." Korea interprets Usando as referring to Dokdo.'
        },
        {
          date: '1693–1696',
          title: 'An Yong-bok Incident',
          text: 'Korean fisherman An Yong-bok traveled to Japan to assert Joseon sovereignty over Ulleungdo and Dokdo. The Tokugawa Shogunate subsequently prohibited Japanese passage to Ulleungdo (1696).'
        },
        {
          date: '1877',
          title: 'Dajokan Order',
          text: 'Japan\'s highest governmental body, the Dajokan, determined that "Ulleungdo and one other island (Dokdo) are not related to Japan." Korea cites this as the strongest evidence from Japan itself.'
        },
        {
          date: '1900',
          title: 'Korean Imperial Edict No. 41',
          text: 'The Korean Empire established Uldo County with jurisdiction over "Seokdo (石島)." Korea interprets Seokdo as Dokdo.'
        },
        {
          date: '1905',
          title: 'Shimane Prefecture Incorporation',
          text: 'Japan incorporated "Takeshima" into Shimane Prefecture by Cabinet decision. Japan claims terra nullius; Korea views it as part of imperial aggression.'
        },
        {
          date: '1945',
          title: 'SCAPIN 677',
          text: 'After Japan\'s surrender, the Allied occupation explicitly excluded Dokdo from Japanese administrative authority. However, it included a caveat that this was "not a final territorial determination."'
        },
        {
          date: '1951',
          title: 'San Francisco Peace Treaty',
          text: 'The treaty specified Jeju, Geomundo, and Ulleungdo as territories Japan must renounce, but did not mention Dokdo. Both sides interpret this omission in their favor.'
        },
        {
          date: '1952',
          title: 'Syngman Rhee Line',
          text: 'South Korea declared the "Peace Line," placing Dokdo within Korean waters. Korea has maintained effective control of Dokdo since then.'
        },
        {
          date: '1954–Present',
          title: 'ICJ Proposals & Ongoing Dispute',
          text: 'Japan has proposed ICJ referral three times (1954, 1962, 2012); Korea has rejected each proposal. Korea maintains a coast guard garrison on Dokdo with continuous administration.'
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
  const events = translations[lang].timeline.events;
  const container = document.getElementById('timeline-events');
  if (!container) return;

  container.innerHTML = events.map((evt, i) => `
    <div class="timeline__event timeline__event--${i % 2 === 0 ? 'left' : 'right'}">
      <div class="timeline__dot"></div>
      <div class="timeline__card">
        <div class="timeline__date">${evt.date}</div>
        <h3 class="timeline__card-title">${evt.title}</h3>
        <p class="timeline__card-text">${evt.text}</p>
      </div>
    </div>
  `).join('');
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
