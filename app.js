import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, NAVER_CLIENT_ID } from './config.js';

const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_');
const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
const GREETINGS = { '스페인어': '¡Hola', '영어': 'Hello', '중국어': '你好' };
function levelsFor(language) { return language === '중국어' ? ['HSK1','HSK2','HSK3','HSK4','HSK5','HSK6'] : ['A1','A2','B1','B2','C1','C2']; }
const initialDecksByLevel = {
  '스페인어': {
    'A1': [
      { name: '스페인어 A1', icon: '🌱', words: [
        { front: 'hola', back: '안녕(하세요)', example: 'Hola, ¿qué tal?', example_ko: '안녕, 어떻게 지내?', synonyms: '안녕' },
        { front: 'gracias', back: '고마워요, 감사합니다', example: 'Gracias por venir.', example_ko: '와줘서 고마워요.', synonyms: '감사해요' },
        { front: 'familia', back: '가족', example: 'Toda mi familia vive cerca.', example_ko: '우리 가족은 모두 근처에 살아요.', synonyms: '' },
        { front: 'casa', back: '집', example: 'Vuelvo a casa a las seis.', example_ko: '저는 여섯 시에 집에 돌아가요.', synonyms: '주택' },
        { front: 'agua', back: '물', example: 'Bebo mucha agua cada día.', example_ko: '저는 매일 물을 많이 마셔요.', synonyms: '' },
        { front: 'comer', back: '먹다', example: 'Vamos a comer juntos.', example_ko: '우리 같이 먹어요.', synonyms: '식사하다' },
        { front: 'beber', back: '마시다', example: 'No me gusta beber café por la noche.', example_ko: '저는 밤에 커피 마시는 것을 안 좋아해요.', synonyms: '' },
        { front: 'vivir', back: '살다', example: 'Vivimos en un piso pequeño.', example_ko: '우리는 작은 아파트에 살아요.', synonyms: '거주하다' },
        { front: 'hablar', back: '말하다', example: '¿Puedes hablar más despacio?', example_ko: '좀 더 천천히 말해 줄 수 있어요?', synonyms: '이야기하다' },
        { front: 'amigo', back: '친구', example: 'Ella es mi mejor amiga.', example_ko: '그녀는 제 가장 친한 친구예요.', synonyms: '' },
        { front: 'escuela', back: '학교', example: 'Los niños caminan a la escuela.', example_ko: '아이들은 학교까지 걸어가요.', synonyms: '' },
        { front: 'libro', back: '책', example: 'Este libro es muy interesante.', example_ko: '이 책은 아주 재미있어요.', synonyms: '' },
        { front: 'trabajo', back: '일, 직장', example: 'Mi trabajo empieza a las nueve.', example_ko: '제 일은 아홉 시에 시작해요.', synonyms: '직업' },
        { front: 'ciudad', back: '도시', example: 'Madrid es una ciudad grande.', example_ko: '마드리드는 큰 도시예요.', synonyms: '' },
        { front: 'país', back: '나라, 국가', example: '¿De qué país eres?', example_ko: '당신은 어느 나라 사람이에요?', synonyms: '국가' },
        { front: 'hombre', back: '남자', example: 'Aquel hombre es mi profesor.', example_ko: '저 남자는 제 선생님이에요.', synonyms: '' },
        { front: 'mujer', back: '여자', example: 'Esa mujer trabaja en un banco.', example_ko: '저 여자는 은행에서 일해요.', synonyms: '' },
        { front: 'niño', back: '아이, 어린이', example: 'El niño juega en el parque.', example_ko: '그 아이는 공원에서 놀아요.', synonyms: '어린이' },
        { front: 'día', back: '날, 하루', example: 'Hoy es un día especial.', example_ko: '오늘은 특별한 날이에요.', synonyms: '' },
        { front: 'noche', back: '밤', example: 'Trabajo hasta tarde por la noche.', example_ko: '저는 밤늦게까지 일해요.', synonyms: '' },
        { front: 'grande', back: '큰', example: 'Necesitamos una mesa más grande.', example_ko: '우리는 더 큰 탁자가 필요해요.', synonyms: '커다란' },
        { front: 'pequeño', back: '작은', example: 'Tiene un jardín pequeño detrás de la casa.', example_ko: '그는 집 뒤에 작은 정원이 있어요.', synonyms: '조그마한' },
        { front: 'bueno', back: '좋은', example: 'Tu idea es muy buena.', example_ko: '네 생각은 아주 좋아요.', synonyms: '' },
        { front: 'feliz', back: '행복한', example: 'Me siento feliz hoy.', example_ko: '저는 오늘 행복해요.', synonyms: '기쁜' },
        { front: 'nombre', back: '이름', example: '¿Cuál es tu nombre?', example_ko: '네 이름이 뭐야?', synonyms: '성함' },
      ]}
    ],
    'A2': [
      { name: '스페인어 A2', icon: '🌿', words: [
        { front: 'viaje', back: '여행', example: 'Hicimos un viaje a Portugal.', example_ko: '우리는 포르투갈로 여행을 갔어요.', synonyms: '' },
        { front: 'hotel', back: '호텔', example: 'Reservamos un hotel cerca de la playa.', example_ko: '우리는 해변 근처 호텔을 예약했어요.', synonyms: '' },
        { front: 'billete', back: '표, 티켓', example: 'Compré un billete de tren.', example_ko: '저는 기차표를 샀어요.', synonyms: '티켓' },
        { front: 'maleta', back: '여행 가방', example: 'Hice la maleta esta mañana.', example_ko: '저는 오늘 아침에 짐을 쌌어요.', synonyms: '짐가방' },
        { front: 'dirección', back: '주소', example: '¿Cuál es tu dirección?', example_ko: '당신의 주소가 뭐예요?', synonyms: '' },
        { front: 'teléfono', back: '전화(기)', example: 'Perdí mi teléfono en el autobús.', example_ko: '저는 버스에서 휴대폰을 잃어버렸어요.', synonyms: '핸드폰' },
        { front: 'tienda', back: '가게, 상점', example: 'Esa tienda cierra a las ocho.', example_ko: '그 가게는 여덟 시에 문을 닫아요.', synonyms: '상점' },
        { front: 'dinero', back: '돈', example: 'No llevo suficiente dinero.', example_ko: '저는 돈을 충분히 안 가지고 있어요.', synonyms: '' },
        { front: 'precio', back: '가격', example: 'El precio ha subido mucho.', example_ko: '가격이 많이 올랐어요.', synonyms: '값' },
        { front: 'comprar', back: '사다', example: 'Voy a comprar un regalo para mi madre.', example_ko: '저는 어머니께 드릴 선물을 살 거예요.', synonyms: '구입하다' },
        { front: 'cocina', back: '부엌', example: 'La cocina huele a pan recién hecho.', example_ko: '부엌에서 갓 구운 빵 냄새가 나요.', synonyms: '주방' },
        { front: 'desayuno', back: '아침 식사', example: 'Siempre tomo un desayuno ligero.', example_ko: '저는 항상 가벼운 아침을 먹어요.', synonyms: '' },
        { front: 'cansado', back: '피곤한', example: 'Estoy muy cansado después del trabajo.', example_ko: '저는 일이 끝나고 아주 피곤해요.', synonyms: '지친' },
        { front: 'enfermo', back: '아픈', example: 'Mi hijo está enfermo desde ayer.', example_ko: '제 아들은 어제부터 아파요.', synonyms: '병든' },
        { front: 'médico', back: '의사', example: 'Tengo cita con el médico mañana.', example_ko: '저는 내일 의사와 진료 약속이 있어요.', synonyms: '의사 선생님' },
        { front: 'deporte', back: '운동, 스포츠', example: '¿Qué deporte practicas?', example_ko: '당신은 어떤 운동을 해요?', synonyms: '운동' },
        { front: 'película', back: '영화', example: 'Vamos a ver una película esta noche.', example_ko: '우리는 오늘 밤에 영화를 볼 거예요.', synonyms: '영화 작품' },
        { front: 'música', back: '음악', example: 'Escucho música cuando estudio.', example_ko: '저는 공부할 때 음악을 들어요.', synonyms: '' },
        { front: 'fiesta', back: '파티', example: 'La fiesta empieza a las nueve.', example_ko: '파티는 아홉 시에 시작해요.', synonyms: '' },
        { front: 'cumpleaños', back: '생일', example: '¡Feliz cumpleaños!', example_ko: '생일 축하해요!', synonyms: '' },
        { front: 'vacaciones', back: '휴가, 방학', example: 'Vamos a la playa de vacaciones.', example_ko: '우리는 휴가로 해변에 가요.', synonyms: '휴일' },
        { front: 'limpio', back: '깨끗한', example: 'El hotel estaba muy limpio.', example_ko: '그 호텔은 아주 깨끗했어요.', synonyms: '청결한' },
        { front: 'sucio', back: '더러운', example: 'Tus zapatos están sucios.', example_ko: '네 신발이 더러워요.', synonyms: '지저분한' },
        { front: 'barrio', back: '동네', example: 'Me gusta mucho mi barrio.', example_ko: '저는 우리 동네를 아주 좋아해요.', synonyms: '지역' },
        { front: 'vecino', back: '이웃', example: 'Mi vecino es muy amable.', example_ko: '제 이웃은 아주 친절해요.', synonyms: '' },
      ]}
    ],
    'B1': [
      { name: '스페인어 B1', icon: '🍀', words: [
        { front: 'personalidad', back: '성격', example: 'Tiene una personalidad muy fuerte.', example_ko: '그는 성격이 아주 강해요.', synonyms: '' },
        { front: 'sincero', back: '솔직한', example: 'Prefiero un amigo sincero.', example_ko: '저는 솔직한 친구를 더 좋아해요.', synonyms: '진실한' },
        { front: 'generoso', back: '관대한', example: 'Es muy generoso con su tiempo.', example_ko: '그는 자기 시간에 아주 관대해요.', synonyms: '' },
        { front: 'tímido', back: '소심한, 수줍은', example: 'De niño era muy tímido.', example_ko: '저는 어렸을 때 아주 수줍음이 많았어요.', synonyms: '수줍은' },
        { front: 'amistad', back: '우정', example: 'Nuestra amistad dura desde el colegio.', example_ko: '우리 우정은 학창 시절부터 계속됐어요.', synonyms: '' },
        { front: 'confianza', back: '신뢰', example: 'Necesitamos más confianza entre nosotros.', example_ko: '우리 사이에 더 많은 신뢰가 필요해요.', synonyms: '믿음' },
        { front: 'costumbre', back: '관습, 습관', example: 'Es costumbre quitarse los zapatos en casa.', example_ko: '집에서 신발을 벗는 것이 관습이에요.', synonyms: '습관' },
        { front: 'tradición', back: '전통', example: 'Esta receta es una tradición familiar.', example_ko: '이 요리법은 가족 전통이에요.', synonyms: '' },
        { front: 'cultura', back: '문화', example: 'Me interesa mucho la cultura japonesa.', example_ko: '저는 일본 문화에 관심이 많아요.', synonyms: '' },
        { front: 'sociedad', back: '사회', example: 'La educación cambia la sociedad.', example_ko: '교육은 사회를 변화시켜요.', synonyms: '' },
        { front: 'igualdad', back: '평등', example: 'Luchan por la igualdad de derechos.', example_ko: '그들은 권리의 평등을 위해 싸워요.', synonyms: '' },
        { front: 'respeto', back: '존중', example: 'El respeto es la base de una buena relación.', example_ko: '존중은 좋은 관계의 기초예요.', synonyms: '' },
        { front: 'libertad', back: '자유', example: 'Valoro mucho mi libertad.', example_ko: '저는 제 자유를 아주 소중히 여겨요.', synonyms: '' },
        { front: 'responsabilidad', back: '책임', example: 'Este trabajo requiere mucha responsabilidad.', example_ko: '이 일은 많은 책임이 필요해요.', synonyms: '책임감' },
        { front: 'esfuerzo', back: '노력', example: 'Todo su esfuerzo mereció la pena.', example_ko: '그의 모든 노력이 보람이 있었어요.', synonyms: '' },
        { front: 'meta', back: '목표', example: 'Mi meta es aprender español en un año.', example_ko: '제 목표는 일 년 안에 스페인어를 배우는 거예요.', synonyms: '목적' },
        { front: 'sueño', back: '꿈', example: 'Su sueño es ser piloto.', example_ko: '그의 꿈은 조종사가 되는 거예요.', synonyms: '' },
        { front: 'futuro', back: '미래', example: 'Nadie sabe lo que traerá el futuro.', example_ko: '미래에 무슨 일이 있을지 아무도 몰라요.', synonyms: '' },
        { front: 'recuerdo', back: '기억, 추억', example: 'Guardo un buen recuerdo de ese viaje.', example_ko: '저는 그 여행에 대한 좋은 추억을 간직하고 있어요.', synonyms: '추억' },
        { front: 'emoción', back: '감정', example: 'No podía ocultar su emoción.', example_ko: '그는 자신의 감정을 숨길 수 없었어요.', synonyms: '' },
        { front: 'preocupación', back: '걱정', example: 'Su mayor preocupación es el dinero.', example_ko: '그의 가장 큰 걱정은 돈이에요.', synonyms: '근심' },
        { front: 'sorpresa', back: '놀람, 깜짝 놀랄 일', example: '¡Qué sorpresa verte aquí!', example_ko: '여기서 널 보다니 정말 놀랐어!', synonyms: '' },
        { front: 'consejo', back: '조언', example: 'Gracias por tu consejo.', example_ko: '네 조언 고마워.', synonyms: '충고' },
        { front: 'solución', back: '해결책', example: 'Encontramos una solución rápida.', example_ko: '우리는 빠른 해결책을 찾았어요.', synonyms: '' },
        { front: 'problema', back: '문제', example: 'Tenemos un problema serio.', example_ko: '우리에게 심각한 문제가 있어요.', synonyms: '' },
      ]}
    ],
    'B2': [
      { name: '스페인어 B2', icon: '🌳', words: [
        { front: 'actitud', back: '태도', example: 'Su actitud positiva ayuda al equipo.', example_ko: '그의 긍정적인 태도가 팀에 도움이 돼요.', synonyms: '' },
        { front: 'comportamiento', back: '행동', example: 'Su comportamiento sorprendió a todos.', example_ko: '그의 행동은 모두를 놀라게 했어요.', synonyms: '행동거지' },
        { front: 'beneficio', back: '이익, 혜택', example: 'El nuevo horario trae muchos beneficios.', example_ko: '새 일정은 많은 혜택을 가져와요.', synonyms: '이점' },
        { front: 'desventaja', back: '단점', example: 'La única desventaja es el precio.', example_ko: '유일한 단점은 가격이에요.', synonyms: '결점' },
        { front: 'ventaja', back: '장점', example: 'Vivir cerca del centro tiene muchas ventajas.', example_ko: '시내 근처에 사는 것은 많은 장점이 있어요.', synonyms: '이점' },
        { front: 'desarrollo', back: '발전', example: 'El país necesita más desarrollo económico.', example_ko: '그 나라는 더 많은 경제 발전이 필요해요.', synonyms: '' },
        { front: 'crecimiento', back: '성장', example: 'La empresa tuvo un crecimiento rápido.', example_ko: '그 회사는 빠르게 성장했어요.', synonyms: '' },
        { front: 'inversión', back: '투자', example: 'Esta es una buena inversión a largo plazo.', example_ko: '이것은 장기적으로 좋은 투자예요.', synonyms: '' },
        { front: 'objetivo', back: '목표', example: 'Nuestro objetivo es reducir los gastos.', example_ko: '우리의 목표는 비용을 줄이는 거예요.', synonyms: '목적' },
        { front: 'estrategia', back: '전략', example: 'Necesitamos una nueva estrategia de venta.', example_ko: '우리는 새로운 판매 전략이 필요해요.', synonyms: '' },
        { front: 'desafío', back: '도전', example: 'Aprender chino es un gran desafío.', example_ko: '중국어를 배우는 것은 큰 도전이에요.', synonyms: '도전 과제' },
        { front: 'obstáculo', back: '장애물', example: 'Superó todos los obstáculos.', example_ko: '그는 모든 장애물을 극복했어요.', synonyms: '' },
        { front: 'superar', back: '극복하다', example: 'Logró superar sus miedos.', example_ko: '그는 자신의 두려움을 극복해냈어요.', synonyms: '이겨내다' },
        { front: 'enfrentar', back: '맞서다, 직면하다', example: 'Debemos enfrentar el problema juntos.', example_ko: '우리는 함께 그 문제에 맞서야 해요.', synonyms: '직면하다' },
        { front: 'reflejar', back: '반영하다', example: 'Sus palabras reflejan su experiencia.', example_ko: '그의 말은 그의 경험을 반영해요.', synonyms: '' },
        { front: 'influir', back: '영향을 미치다', example: 'El clima influye en nuestro estado de ánimo.', example_ko: '날씨는 우리의 기분에 영향을 미쳐요.', synonyms: '' },
        { front: 'destacar', back: '두드러지다, 강조하다', example: 'Quiero destacar su gran esfuerzo.', example_ko: '저는 그의 큰 노력을 강조하고 싶어요.', synonyms: '강조하다' },
        { front: 'garantizar', back: '보장하다', example: 'No podemos garantizar el resultado.', example_ko: '우리는 결과를 보장할 수 없어요.', synonyms: '' },
        { front: 'fomentar', back: '조성하다, 촉진하다', example: 'La escuela fomenta la creatividad.', example_ko: '그 학교는 창의력을 조성해요.', synonyms: '촉진하다' },
        { front: 'promover', back: '촉진하다, 홍보하다', example: 'La campaña promueve un estilo de vida saludable.', example_ko: '그 캠페인은 건강한 생활 방식을 촉진해요.', synonyms: '' },
        { front: 'aportar', back: '기여하다, 제공하다', example: 'Cada miembro aporta algo diferente.', example_ko: '각 구성원은 저마다 다른 것을 기여해요.', synonyms: '기여하다' },
        { front: 'exigir', back: '요구하다', example: 'El puesto exige mucha paciencia.', example_ko: '그 직책은 많은 인내심을 요구해요.', synonyms: '' },
        { front: 'asumir', back: '떠맡다, 가정하다', example: 'Tuvo que asumir la responsabilidad del error.', example_ko: '그는 그 실수에 대한 책임을 떠맡아야 했어요.', synonyms: '맡다' },
        { front: 'percepción', back: '인식', example: 'Su percepción del mundo cambió tras el viaje.', example_ko: '그의 세계에 대한 인식은 여행 후 바뀌었어요.', synonyms: '' },
        { front: 'tendencia', back: '경향, 추세', example: 'Hay una tendencia a trabajar desde casa.', example_ko: '재택근무를 하는 경향이 있어요.', synonyms: '추세' },
      ]}
    ],
    'C1': [
      { name: '스페인어 C1', icon: '🎋', words: [
        { front: 'inherente', back: '내재하는, 고유의', example: 'El riesgo es inherente a este trabajo.', example_ko: '위험은 이 일에 내재해 있어요.', synonyms: '고유의' },
        { front: 'exhaustivo', back: '철저한, 상세한', example: 'Hicieron un estudio exhaustivo del mercado.', example_ko: '그들은 시장에 대해 철저한 연구를 했어요.', synonyms: '상세한' },
        { front: 'controvertido', back: '논란이 많은', example: 'Es un tema muy controvertido.', example_ko: '그것은 아주 논란이 많은 주제예요.', synonyms: '논쟁적인' },
        { front: 'plausible', back: '그럴듯한, 타당한', example: 'Su explicación parece plausible.', example_ko: '그의 설명은 그럴듯해 보여요.', synonyms: '타당한' },
        { front: 'instigar', back: '부추기다, 선동하다', example: 'Lo acusaron de instigar la protesta.', example_ko: '그는 시위를 선동했다는 혐의를 받았어요.', synonyms: '선동하다' },
        { front: 'discernir', back: '분별하다, 식별하다', example: 'Es difícil discernir la verdad de la mentira.', example_ko: '진실과 거짓을 분별하기는 어려워요.', synonyms: '식별하다' },
        { front: 'converger', back: '수렴하다', example: 'Todas las teorías convergen en la misma conclusión.', example_ko: '모든 이론은 같은 결론으로 수렴해요.', synonyms: '' },
        { front: 'divergente', back: '갈라지는, 다른', example: 'Tienen opiniones divergentes sobre el tema.', example_ko: '그들은 그 주제에 대해 서로 다른 의견을 가지고 있어요.', synonyms: '상이한' },
        { front: 'subyacente', back: '근본적인, 기저에 있는', example: 'Hay una causa subyacente que nadie ha mencionado.', example_ko: '아무도 언급하지 않은 근본적인 원인이 있어요.', synonyms: '근본적인' },
        { front: 'preponderante', back: '우세한, 지배적인', example: 'Su influencia es preponderante en la industria.', example_ko: '그의 영향력은 업계에서 지배적이에요.', synonyms: '지배적인' },
        { front: 'efervescente', back: '활기찬, 생기 넘치는', example: 'Tiene una personalidad efervescente.', example_ko: '그는 활기 넘치는 성격이에요.', synonyms: '활기찬' },
        { front: 'intangible', back: '무형의', example: 'La confianza es un activo intangible.', example_ko: '신뢰는 무형의 자산이에요.', synonyms: '' },
        { front: 'incuestionable', back: '의심의 여지가 없는', example: 'Su talento es incuestionable.', example_ko: '그의 재능은 의심의 여지가 없어요.', synonyms: '명백한' },
        { front: 'prevalente', back: '만연한, 우세한', example: 'Esta enfermedad es más prevalente en invierno.', example_ko: '이 병은 겨울에 더 만연해요.', synonyms: '만연한' },
        { front: 'desalentador', back: '낙담시키는', example: 'Los resultados fueron desalentadores.', example_ko: '그 결과는 낙담스러웠어요.', synonyms: '실망스러운' },
        { front: 'connotación', back: '함축, 뉘앙스', example: 'Esa palabra tiene una connotación negativa.', example_ko: '그 단어는 부정적인 뉘앙스를 가지고 있어요.', synonyms: '뉘앙스' },
        { front: 'premisa', back: '전제', example: 'Su argumento parte de una premisa falsa.', example_ko: '그의 주장은 잘못된 전제에서 출발해요.', synonyms: '' },
        { front: 'inferir', back: '추론하다', example: 'Podemos inferir mucho de su silencio.', example_ko: '우리는 그의 침묵에서 많은 것을 추론할 수 있어요.', synonyms: '추측하다' },
        { front: 'rebatir', back: '반박하다', example: 'Nadie pudo rebatir sus argumentos.', example_ko: '아무도 그의 주장을 반박할 수 없었어요.', synonyms: '' },
        { front: 'reivindicar', back: '요구하다, 되찾다', example: 'Los trabajadores reivindican mejores condiciones.', example_ko: '노동자들은 더 나은 근무 조건을 요구해요.', synonyms: '주장하다' },
        { front: 'proliferar', back: '급증하다, 확산하다', example: 'Las tiendas online han proliferado en los últimos años.', example_ko: '최근 몇 년간 온라인 상점이 급증했어요.', synonyms: '확산하다' },
        { front: 'estigma', back: '낙인, 오명', example: 'Todavía existe un estigma sobre la salud mental.', example_ko: '정신 건강에 대한 낙인이 여전히 존재해요.', synonyms: '오명' },
        { front: 'resarcir', back: '보상하다', example: 'La empresa debe resarcir a los afectados.', example_ko: '그 회사는 피해자들에게 보상해야 해요.', synonyms: '배상하다' },
        { front: 'atenuar', back: '완화하다, 약화시키다', example: 'Estas medidas ayudan a atenuar el problema.', example_ko: '이 조치들은 문제를 완화하는 데 도움이 돼요.', synonyms: '완화하다' },
        { front: 'denotar', back: '나타내다, 의미하다', example: 'Su tono denotaba cierta molestia.', example_ko: '그의 어조는 약간의 짜증을 나타냈어요.', synonyms: '의미하다' },
      ]}
    ],
    'C2': [
      // No official CEFR wordlist exists for Spanish C2 (Instituto Cervantes' PCIC is notional, not a flat list) — curated using own judgment
      { name: '스페인어 C2', icon: '🏔️', words: [
        { front: 'verborrea', back: '장황함, 수다스러움', example: 'Su discurso fue pura verborrea sin contenido.', example_ko: '그의 연설은 내용 없는 순전한 장황함이었어요.', synonyms: '' },
        { front: 'hermetismo', back: '폐쇄성, 비밀스러움', example: 'El hermetismo del gobierno preocupa a los periodistas.', example_ko: '정부의 비밀스러움이 기자들을 걱정시켜요.', synonyms: '비밀주의' },
        { front: 'sibilino', back: '수수께끼 같은, 애매한', example: 'Dio una respuesta sibilina que nadie entendió.', example_ko: '그는 아무도 이해하지 못할 수수께끼 같은 대답을 했어요.', synonyms: '모호한' },
        { front: 'proclive', back: '~하는 경향이 있는', example: 'Es proclive a exagerar las cosas.', example_ko: '그는 일을 과장하는 경향이 있어요.', synonyms: '경향이 있는' },
        { front: 'inextricable', back: '풀 수 없는, 복잡하게 얽힌', example: 'Se encontraban en una situación inextricable.', example_ko: '그들은 풀 수 없는 상황에 놓여 있었어요.', synonyms: '복잡하게 얽힌' },
        { front: 'lacónico', back: '간결한, 말수가 적은', example: 'Respondió de forma lacónica a la pregunta.', example_ko: '그는 질문에 간결하게 대답했어요.', synonyms: '간결한' },
        { front: 'epifanía', back: '깨달음, 통찰의 순간', example: 'Tuvo una especie de epifanía a mitad del viaje.', example_ko: '그는 여행 도중 일종의 깨달음을 얻었어요.', synonyms: '깨달음' },
        { front: 'entelequia', back: '실현되지 않는 이상, 공상', example: 'Ese plan es pura entelequia, no se hará realidad.', example_ko: '그 계획은 순전한 공상이라 실현되지 않을 거예요.', synonyms: '공상' },
        { front: 'baladí', back: '하찮은, 사소한', example: 'No pierdas tiempo en asuntos baladíes.', example_ko: '하찮은 일에 시간을 낭비하지 마세요.', synonyms: '사소한' },
        { front: 'quimérico', back: '공상적인, 비현실적인', example: 'Su proyecto parece un poco quimérico.', example_ko: '그의 프로젝트는 다소 비현실적으로 보여요.', synonyms: '비현실적인' },
        { front: 'taciturno', back: '과묵한, 말이 없는', example: 'Se volvió taciturno tras la noticia.', example_ko: '그는 그 소식을 듣고 나서 과묵해졌어요.', synonyms: '말이 없는' },
        { front: 'impávido', back: '태연한, 대담한', example: 'Permaneció impávido ante el peligro.', example_ko: '그는 위험 앞에서도 태연했어요.', synonyms: '태연한' },
        { front: 'pletórico', back: '넘쳐나는, 가득 찬', example: 'Volvió pletórico de energía tras las vacaciones.', example_ko: '그는 휴가를 다녀온 후 에너지가 넘쳐났어요.', synonyms: '넘치는' },
        { front: 'abyecto', back: '비열한, 비참한', example: 'Cometió un acto abyecto contra sus amigos.', example_ko: '그는 친구들에게 비열한 짓을 저질렀어요.', synonyms: '비열한' },
        { front: 'sempiterno', back: '영원한', example: 'Hablaba de un amor sempiterno.', example_ko: '그는 영원한 사랑에 대해 이야기했어요.', synonyms: '영원한' },
        { front: 'proscribir', back: '금지하다, 추방하다', example: 'La ley proscribe ese tipo de prácticas.', example_ko: '그 법은 그런 종류의 관행을 금지해요.', synonyms: '금지하다' },
        { front: 'lozanía', back: '생기, 활기', example: 'Su piel conservaba una sorprendente lozanía.', example_ko: '그의 피부는 놀라운 생기를 간직하고 있었어요.', synonyms: '싱그러움' },
        { front: 'henchido', back: '가득 찬, 부풀어 오른', example: 'Salió del escenario henchido de orgullo.', example_ko: '그는 자부심으로 가득 차서 무대를 나갔어요.', synonyms: '가득 찬' },
        { front: 'impertérrito', back: '태연자약한', example: 'Se mantuvo impertérrito ante las críticas.', example_ko: '그는 비판 앞에서도 태연자약했어요.', synonyms: '동요하지 않는' },
        { front: 'procaz', back: '뻔뻔한, 무례한', example: 'Sus comentarios procaces incomodaron a todos.', example_ko: '그의 뻔뻔한 발언은 모두를 불편하게 했어요.', synonyms: '뻔뻔한' },
        { front: 'pusilánime', back: '소심한, 겁 많은', example: 'No seas pusilánime, defiende tu opinión.', example_ko: '겁내지 말고 네 의견을 옹호해.', synonyms: '겁 많은' },
        { front: 'exiguo', back: '아주 적은', example: 'Vivía con un sueldo exiguo.', example_ko: '그는 아주 적은 월급으로 살았어요.', synonyms: '얼마 안 되는' },
        { front: 'perentorio', back: '긴급한, 촉박한', example: 'Recibió un plazo perentorio para responder.', example_ko: '그는 답변할 촉박한 기한을 받았어요.', synonyms: '긴급한' },
        { front: 'concomitante', back: '수반하는, 동반하는', example: 'El estrés es un factor concomitante de la enfermedad.', example_ko: '스트레스는 그 병을 수반하는 요인이에요.', synonyms: '동반하는' },
        { front: 'dilucidar', back: '명확히 하다, 해명하다', example: 'Los investigadores intentan dilucidar la causa del accidente.', example_ko: '연구자들은 사고 원인을 명확히 하려고 해요.', synonyms: '해명하다' },
      ]}
    ]
  },
  '영어': {
    'A1': [
      { name: '영어 A1', icon: '🌱', words: [
        { front: 'family', back: '가족', example: 'My family is very close.', example_ko: '우리 가족은 아주 화목해요.', synonyms: '' },
        { front: 'house', back: '집', example: 'We bought a new house last year.', example_ko: '우리는 작년에 새 집을 샀어요.', synonyms: '주택' },
        { front: 'water', back: '물', example: 'Please give me some water.', example_ko: '물 좀 주세요.', synonyms: '' },
        { front: 'eat', back: '먹다', example: 'I eat breakfast every morning.', example_ko: '저는 매일 아침 식사를 해요.', synonyms: '식사하다' },
        { front: 'drink', back: '마시다', example: 'She likes to drink tea.', example_ko: '그녀는 차 마시는 것을 좋아해요.', synonyms: '' },
        { front: 'sleep', back: '자다', example: 'I usually sleep at eleven.', example_ko: '저는 보통 열한 시에 자요.', synonyms: '잠자다' },
        { front: 'friend', back: '친구', example: 'He is my oldest friend.', example_ko: '그는 제 가장 오래된 친구예요.', synonyms: '' },
        { front: 'school', back: '학교', example: 'My daughter walks to school.', example_ko: '제 딸은 학교까지 걸어가요.', synonyms: '' },
        { front: 'book', back: '책', example: 'I borrowed this book from the library.', example_ko: '저는 이 책을 도서관에서 빌렸어요.', synonyms: '' },
        { front: 'day', back: '날, 하루', example: 'It was a long day.', example_ko: '긴 하루였어요.', synonyms: '' },
        { front: 'big', back: '큰', example: 'They live in a big city.', example_ko: '그들은 큰 도시에 살아요.', synonyms: '커다란' },
        { front: 'small', back: '작은', example: 'We have a small garden.', example_ko: '우리는 작은 정원이 있어요.', synonyms: '조그마한' },
        { front: 'happy', back: '행복한', example: 'I feel happy when I see you.', example_ko: '저는 당신을 보면 행복해요.', synonyms: '기쁜' },
        { front: 'good', back: '좋은', example: "That's a good idea.", example_ko: '그것 좋은 생각이네요.', synonyms: '' },
        { front: 'bad', back: '나쁜', example: 'The weather was really bad yesterday.', example_ko: '어제 날씨가 정말 나빴어요.', synonyms: '' },
        { front: 'like', back: '좋아하다', example: 'I like this song a lot.', example_ko: '저는 이 노래를 아주 좋아해요.', synonyms: '' },
        { front: 'want', back: '원하다', example: 'What do you want for lunch?', example_ko: '점심으로 뭘 원해요?', synonyms: '바라다' },
        { front: 'go', back: '가다', example: "Let's go to the park.", example_ko: '공원에 가요.', synonyms: '' },
        { front: 'work', back: '일하다', example: 'I work in a small office.', example_ko: '저는 작은 사무실에서 일해요.', synonyms: '근무하다' },
        { front: 'money', back: '돈', example: "I don't have much money left.", example_ko: '저는 돈이 얼마 안 남았어요.', synonyms: '' },
        { front: 'name', back: '이름', example: "What's your name?", example_ko: '이름이 뭐예요?', synonyms: '성함' },
        { front: 'time', back: '시간', example: "I don't have time today.", example_ko: '저는 오늘 시간이 없어요.', synonyms: '' },
        { front: 'mother', back: '어머니, 엄마', example: 'My mother cooks very well.', example_ko: '제 어머니는 요리를 아주 잘하세요.', synonyms: '엄마' },
        { front: 'father', back: '아버지, 아빠', example: 'My father works at a hospital.', example_ko: '제 아버지는 병원에서 일하세요.', synonyms: '아빠' },
        { front: 'teacher', back: '선생님', example: 'Our teacher is very kind.', example_ko: '우리 선생님은 아주 친절하세요.', synonyms: '' },
      ]}
    ],
    'A2': [
      { name: '영어 A2', icon: '🌿', words: [
        { front: 'experience', back: '경험', example: 'It was an amazing experience.', example_ko: '정말 놀라운 경험이었어요.', synonyms: '' },
        { front: 'opportunity', back: '기회', example: 'This job is a great opportunity.', example_ko: '이 일은 좋은 기회예요.', synonyms: '' },
        { front: 'environment', back: '환경', example: 'We should protect the environment.', example_ko: '우리는 환경을 보호해야 해요.', synonyms: '' },
        { front: 'relationship', back: '관계', example: 'They have a close relationship.', example_ko: '그들은 가까운 관계예요.', synonyms: '' },
        { front: 'decision', back: '결정', example: 'It was a difficult decision.', example_ko: '그것은 어려운 결정이었어요.', synonyms: '결심' },
        { front: 'discover', back: '발견하다', example: 'Scientists discovered a new species.', example_ko: '과학자들은 새로운 종을 발견했어요.', synonyms: '찾아내다' },
        { front: 'develop', back: '발전시키다, 개발하다', example: 'The city plans to develop the old port area.', example_ko: '그 도시는 오래된 항구 지역을 개발할 계획이에요.', synonyms: '개발하다' },
        { front: 'protect', back: '보호하다', example: 'Parents protect their children.', example_ko: '부모는 자녀를 보호해요.', synonyms: '' },
        { front: 'pollution', back: '오염', example: 'Air pollution is getting worse.', example_ko: '대기 오염이 심해지고 있어요.', synonyms: '공해' },
        { front: 'traditional', back: '전통적인', example: 'She wore a traditional dress.', example_ko: '그녀는 전통 의상을 입었어요.', synonyms: '' },
        { front: 'comfortable', back: '편안한', example: 'This chair is very comfortable.', example_ko: '이 의자는 아주 편안해요.', synonyms: '안락한' },
        { front: 'crowded', back: '붐비는', example: 'The train was extremely crowded.', example_ko: '기차는 아주 붐볐어요.', synonyms: '' },
        { front: 'polite', back: '예의 바른', example: 'He is always polite to strangers.', example_ko: '그는 낯선 사람에게도 항상 예의 바르게 대해요.', synonyms: '공손한' },
        { front: 'nervous', back: '긴장한', example: 'I feel nervous before exams.', example_ko: '저는 시험 전에 긴장해요.', synonyms: '불안한' },
        { front: 'surprised', back: '놀란', example: 'I was surprised by the news.', example_ko: '저는 그 소식에 놀랐어요.', synonyms: '' },
        { front: 'worried', back: '걱정하는', example: 'She looks worried about something.', example_ko: '그녀는 뭔가를 걱정하는 것처럼 보여요.', synonyms: '염려하는' },
        { front: 'successful', back: '성공적인', example: 'The event was very successful.', example_ko: '그 행사는 아주 성공적이었어요.', synonyms: '' },
        { front: 'borrow', back: '빌리다', example: 'Can I borrow your pen?', example_ko: '펜 좀 빌릴 수 있을까요?', synonyms: '' },
        { front: 'lend', back: '빌려주다', example: 'Could you lend me some money?', example_ko: '돈 좀 빌려줄 수 있어요?', synonyms: '' },
        { front: 'save', back: '저축하다, 아끼다', example: "I'm trying to save money this year.", example_ko: '저는 올해 돈을 모으려고 해요.', synonyms: '모으다' },
        { front: 'earn', back: '벌다', example: 'He earns a good salary.', example_ko: '그는 좋은 월급을 벌어요.', synonyms: '' },
        { front: 'celebrate', back: '기념하다, 축하하다', example: 'We celebrated her birthday together.', example_ko: '우리는 함께 그녀의 생일을 축하했어요.', synonyms: '' },
        { front: 'complain', back: '불평하다', example: 'He never complains about anything.', example_ko: '그는 무엇에도 불평하지 않아요.', synonyms: '투덜대다' },
        { front: 'communicate', back: '의사소통하다', example: "It's important to communicate clearly.", example_ko: '명확하게 의사소통하는 것이 중요해요.', synonyms: '' },
        { front: 'achieve', back: '성취하다, 이루다', example: 'She achieved her goal at last.', example_ko: '그녀는 마침내 목표를 이루었어요.', synonyms: '달성하다' },
      ]}
    ],
    'B1': [
      { name: '영어 B1', icon: '🍀', words: [
        { front: 'achievement', back: '성취, 업적', example: 'Graduating was a great achievement for him.', example_ko: '졸업은 그에게 큰 성취였어요.', synonyms: '업적' },
        { front: 'attitude', back: '태도', example: 'I like her positive attitude.', example_ko: '저는 그녀의 긍정적인 태도가 좋아요.', synonyms: '' },
        { front: 'atmosphere', back: '분위기, 대기', example: 'The restaurant has a cozy atmosphere.', example_ko: '그 식당은 아늑한 분위기예요.', synonyms: '' },
        { front: 'challenge', back: '도전, 과제', example: 'Learning a new language is a real challenge.', example_ko: '새로운 언어를 배우는 것은 진짜 도전이에요.', synonyms: '과제' },
        { front: 'confident', back: '자신감 있는', example: 'She felt confident about the interview.', example_ko: '그녀는 면접에 대해 자신감을 느꼈어요.', synonyms: '' },
        { front: 'embarrassed', back: '당황한, 창피한', example: 'I was embarrassed by my mistake.', example_ko: '저는 제 실수 때문에 창피했어요.', synonyms: '민망한' },
        { front: 'reliable', back: '믿을 만한', example: 'He is a reliable colleague.', example_ko: '그는 믿을 만한 동료예요.', synonyms: '믿음직한' },
        { front: 'responsibility', back: '책임', example: 'Taking care of the pet is your responsibility.', example_ko: '그 반려동물을 돌보는 것은 네 책임이야.', synonyms: '책무' },
        { front: 'determined', back: '결심한, 단호한', example: 'She is determined to finish the project.', example_ko: '그녀는 프로젝트를 끝내기로 결심했어요.', synonyms: '단호한' },
        { front: 'impressive', back: '인상적인', example: 'His speech was really impressive.', example_ko: '그의 연설은 정말 인상적이었어요.', synonyms: '' },
        { front: 'influence', back: '영향(을 미치다)', example: 'Music had a big influence on his life.', example_ko: '음악은 그의 삶에 큰 영향을 미쳤어요.', synonyms: '영향력' },
        { front: 'improvement', back: '개선, 향상', example: "There has been a big improvement in her grades.", example_ko: '그녀의 성적에 큰 향상이 있었어요.', synonyms: '' },
        { front: 'investigate', back: '조사하다', example: 'Police are investigating the accident.', example_ko: '경찰은 그 사고를 조사하고 있어요.', synonyms: '' },
        { front: 'participate', back: '참가하다', example: 'Everyone can participate in the event.', example_ko: '누구나 그 행사에 참가할 수 있어요.', synonyms: '참여하다' },
        { front: 'persuade', back: '설득하다', example: 'I tried to persuade him to stay.', example_ko: '저는 그가 머물도록 설득하려고 했어요.', synonyms: '' },
        { front: 'politics', back: '정치', example: "He isn't interested in politics.", example_ko: '그는 정치에 관심이 없어요.', synonyms: '' },
        { front: 'poverty', back: '빈곤, 가난', example: 'The program aims to reduce poverty.', example_ko: '그 프로그램은 빈곤을 줄이는 것을 목표로 해요.', synonyms: '가난' },
        { front: 'previous', back: '이전의', example: 'In my previous job, I worked in sales.', example_ko: '제 이전 직장에서는 영업 일을 했어요.', synonyms: '지난' },
        { front: 'reflect', back: '반영하다, 곰곰이 생각하다', example: 'His writing reflects his personality.', example_ko: '그의 글은 그의 성격을 반영해요.', synonyms: '' },
        { front: 'represent', back: '대표하다, 나타내다', example: 'She will represent our school at the contest.', example_ko: '그녀는 대회에서 우리 학교를 대표할 거예요.', synonyms: '' },
        { front: 'require', back: '요구하다, 필요로 하다', example: 'This job requires a lot of patience.', example_ko: '이 일은 많은 인내심을 필요로 해요.', synonyms: '' },
        { front: 'suitable', back: '적합한', example: "This dress isn't suitable for the interview.", example_ko: '이 옷은 면접에 적합하지 않아요.', synonyms: '알맞은' },
        { front: 'survive', back: '살아남다, 생존하다', example: 'Few plants survive in the desert.', example_ko: '사막에서 살아남는 식물은 거의 없어요.', synonyms: '' },
        { front: 'valuable', back: '소중한, 귀중한', example: 'Your advice was very valuable to me.', example_ko: '당신의 조언은 저에게 아주 소중했어요.', synonyms: '' },
        { front: 'honest', back: '정직한', example: 'Please be honest with me.', example_ko: '저에게 솔직히 말해 주세요.', synonyms: '솔직한' },
      ]}
    ],
    'B2': [
      { name: '영어 B2', icon: '🌳', words: [
        { front: 'crisis', back: '위기', example: 'The company is facing a financial crisis.', example_ko: '그 회사는 재정 위기에 직면해 있어요.', synonyms: '' },
        { front: 'courage', back: '용기', example: 'It took courage to speak up.', example_ko: '목소리를 내는 데는 용기가 필요했어요.', synonyms: '' },
        { front: 'crucial', back: '결정적인, 중요한', example: 'This decision is crucial for our future.', example_ko: '이 결정은 우리의 미래에 결정적이에요.', synonyms: '중대한' },
        { front: 'deserve', back: '받을 자격이 있다', example: 'You deserve a break after all that work.', example_ko: '그 모든 일을 하고 나서 당신은 쉴 자격이 있어요.', synonyms: '' },
        { front: 'distribute', back: '분배하다, 나누어주다', example: 'Volunteers distributed food to the families.', example_ko: '자원봉사자들은 가족들에게 음식을 나눠 주었어요.', synonyms: '나누다' },
        { front: 'efficient', back: '효율적인', example: 'We need a more efficient system.', example_ko: '우리는 더 효율적인 시스템이 필요해요.', synonyms: '' },
        { front: 'emphasize', back: '강조하다', example: 'The teacher emphasized the importance of practice.', example_ko: '선생님은 연습의 중요성을 강조했어요.', synonyms: '' },
        { front: 'enthusiastic', back: '열정적인', example: 'She is enthusiastic about her new job.', example_ko: '그녀는 새 직장에 대해 열정적이에요.', synonyms: '' },
        { front: 'establish', back: '설립하다, 확립하다', example: 'They established the company ten years ago.', example_ko: '그들은 십 년 전에 그 회사를 설립했어요.', synonyms: '' },
        { front: 'ethical', back: '윤리적인', example: 'There are ethical concerns about the experiment.', example_ko: '그 실험에는 윤리적인 우려가 있어요.', synonyms: '도덕적인' },
        { front: 'extraordinary', back: '비범한, 특별한', example: 'She has an extraordinary talent for music.', example_ko: '그녀는 음악에 비범한 재능이 있어요.', synonyms: '특별한' },
        { front: 'flexible', back: '유연한', example: 'My work hours are quite flexible.', example_ko: '제 근무 시간은 꽤 유연해요.', synonyms: '' },
        { front: 'forgive', back: '용서하다', example: 'I hope you can forgive me.', example_ko: '당신이 저를 용서해 주길 바라요.', synonyms: '' },
        { front: 'fundamental', back: '근본적인', example: 'Trust is fundamental to any relationship.', example_ko: '신뢰는 어떤 관계에도 근본적이에요.', synonyms: '기본적인' },
        { front: 'generate', back: '발생시키다, 만들어내다', example: 'Solar panels generate clean energy.', example_ko: '태양광 패널은 깨끗한 에너지를 만들어내요.', synonyms: '' },
        { front: 'guarantee', back: '보장하다', example: "We can't guarantee the delivery date.", example_ko: '우리는 배송일을 보장할 수 없어요.', synonyms: '' },
        { front: 'imagination', back: '상상력', example: 'Children have such a rich imagination.', example_ko: '아이들은 아주 풍부한 상상력을 가지고 있어요.', synonyms: '' },
        { front: 'inspire', back: '영감을 주다', example: 'Her story inspired many people.', example_ko: '그녀의 이야기는 많은 사람들에게 영감을 주었어요.', synonyms: '' },
        { front: 'insight', back: '통찰력', example: 'The book gives real insight into history.', example_ko: '그 책은 역사에 대한 진정한 통찰력을 줘요.', synonyms: '' },
        { front: 'justify', back: '정당화하다', example: "He couldn't justify the extra cost.", example_ko: '그는 추가 비용을 정당화할 수 없었어요.', synonyms: '' },
        { front: 'maintain', back: '유지하다', example: 'It is hard to maintain a healthy diet.', example_ko: '건강한 식단을 유지하는 것은 어려워요.', synonyms: '' },
        { front: 'majority', back: '다수, 대부분', example: 'The majority of students agreed.', example_ko: '대다수의 학생들이 동의했어요.', synonyms: '대다수' },
        { front: 'mysterious', back: '신비로운', example: 'There is something mysterious about that house.', example_ko: '저 집에는 뭔가 신비로운 점이 있어요.', synonyms: '' },
        { front: 'obtain', back: '얻다, 획득하다', example: 'It is hard to obtain a visa these days.', example_ko: '요즘 비자를 얻기가 어려워요.', synonyms: '' },
        { front: 'potential', back: '잠재적인, 잠재력', example: 'The team has great potential.', example_ko: '그 팀은 큰 잠재력이 있어요.', synonyms: '' },
      ]}
    ],
    'C1': [
      { name: '영어 C1', icon: '🎋', words: [
        { front: 'abolish', back: '폐지하다', example: 'The government decided to abolish the old tax law.', example_ko: '정부는 오래된 세금법을 폐지하기로 결정했어요.', synonyms: '' },
        { front: 'abundance', back: '풍부함', example: 'The region has an abundance of natural resources.', example_ko: '그 지역은 천연자원이 풍부해요.', synonyms: '풍요' },
        { front: 'accessible', back: '접근하기 쉬운', example: 'The building is accessible to wheelchair users.', example_ko: '그 건물은 휠체어 이용자가 접근하기 쉬워요.', synonyms: '' },
        { front: 'accumulate', back: '축적하다', example: 'Dust had accumulated on the shelves.', example_ko: '선반에 먼지가 쌓였어요.', synonyms: '쌓이다' },
        { front: 'adverse', back: '불리한, 부정적인', example: 'The drug can have adverse side effects.', example_ko: '그 약은 부정적인 부작용이 있을 수 있어요.', synonyms: '부정적인' },
        { front: 'aesthetic', back: '미적인', example: "The building's aesthetic value is widely admired.", example_ko: '그 건물의 미적 가치는 널리 인정받고 있어요.', synonyms: '' },
        { front: 'anonymous', back: '익명의', example: 'The donor chose to remain anonymous.', example_ko: '그 기부자는 익명으로 남기를 선택했어요.', synonyms: '' },
        { front: 'arbitrary', back: '임의적인, 자의적인', example: 'The rule seems completely arbitrary.', example_ko: '그 규칙은 완전히 자의적으로 보여요.', synonyms: '자의적인' },
        { front: 'articulate', back: '명확히 표현하다', example: 'She articulated her concerns clearly.', example_ko: '그녀는 자신의 우려를 명확히 표현했어요.', synonyms: '' },
        { front: 'authentic', back: '진짜의, 진정한', example: 'This restaurant serves authentic Italian food.', example_ko: '이 식당은 정통 이탈리아 음식을 제공해요.', synonyms: '정통의' },
        { front: 'autonomy', back: '자율성', example: 'Teenagers want more autonomy from their parents.', example_ko: '십대들은 부모로부터 더 많은 자율성을 원해요.', synonyms: '' },
        { front: 'brutal', back: '잔인한', example: 'The critic gave a brutal review of the film.', example_ko: '그 평론가는 영화에 대해 잔인한 평을 남겼어요.', synonyms: '가혹한' },
        { front: 'capability', back: '역량, 능력', example: 'The team has the capability to win.', example_ko: '그 팀은 이길 역량이 있어요.', synonyms: '능력' },
        { front: 'clarity', back: '명료함', example: 'She explained the plan with great clarity.', example_ko: '그녀는 아주 명료하게 계획을 설명했어요.', synonyms: '명확함' },
        { front: 'cognitive', back: '인지의', example: 'The game improves cognitive skills.', example_ko: '그 게임은 인지 능력을 향상시켜요.', synonyms: '' },
        { front: 'collaborate', back: '협력하다', example: 'The two companies agreed to collaborate on the project.', example_ko: '두 회사는 그 프로젝트에서 협력하기로 합의했어요.', synonyms: '협업하다' },
        { front: 'compassion', back: '연민', example: 'She treated the patients with great compassion.', example_ko: '그녀는 환자들을 큰 연민으로 대했어요.', synonyms: '동정심' },
        { front: 'compelling', back: '설득력 있는', example: 'He made a compelling argument for change.', example_ko: '그는 변화에 대해 설득력 있는 주장을 펼쳤어요.', synonyms: '' },
        { front: 'complexity', back: '복잡성', example: 'The complexity of the issue surprised everyone.', example_ko: '그 문제의 복잡성은 모두를 놀라게 했어요.', synonyms: '' },
        { front: 'condemn', back: '비난하다', example: 'Leaders condemned the attack immediately.', example_ko: '지도자들은 즉시 그 공격을 비난했어요.', synonyms: '규탄하다' },
        { front: 'consensus', back: '합의', example: 'The committee reached a consensus at last.', example_ko: '위원회는 마침내 합의에 도달했어요.', synonyms: '' },
        { front: 'constitute', back: '구성하다', example: 'Women constitute half of the workforce.', example_ko: '여성은 노동력의 절반을 구성해요.', synonyms: '' },
        { front: 'contemplate', back: '심사숙고하다', example: 'She sat by the window, contemplating her future.', example_ko: '그녀는 창가에 앉아 자신의 미래를 심사숙고했어요.', synonyms: '숙고하다' },
        { front: 'corruption', back: '부패', example: 'The new leader promised to fight corruption.', example_ko: '새 지도자는 부패와 싸우겠다고 약속했어요.', synonyms: '' },
        { front: 'credibility', back: '신뢰성', example: 'The scandal damaged his credibility.', example_ko: '그 스캔들은 그의 신뢰성을 손상시켰어요.', synonyms: '' },
      ]}
    ],
    'C2': [
      // No official Oxford (or other) C2 wordlist exists for English — curated using own judgment
      { name: '영어 C2', icon: '🏔️', words: [
        { front: 'ephemeral', back: '덧없는, 일시적인', example: 'Fame on social media can be ephemeral.', example_ko: '소셜 미디어에서의 인기는 덧없을 수 있어요.', synonyms: '일시적인' },
        { front: 'ubiquitous', back: '어디에나 있는, 편재하는', example: 'Smartphones have become ubiquitous in modern life.', example_ko: '스마트폰은 현대 생활에서 어디에나 있게 되었어요.', synonyms: '편재하는' },
        { front: 'eloquent', back: '유창한, 설득력 있는', example: 'He gave an eloquent speech at the funeral.', example_ko: '그는 장례식에서 유창한 연설을 했어요.', synonyms: '' },
        { front: 'resilient', back: '회복력 있는, 강인한', example: 'Children can be surprisingly resilient.', example_ko: '아이들은 놀랍도록 회복력이 강할 수 있어요.', synonyms: '강인한' },
        { front: 'ambiguous', back: '모호한', example: 'His answer was deliberately ambiguous.', example_ko: '그의 대답은 일부러 모호했어요.', synonyms: '애매한' },
        { front: 'meticulous', back: '꼼꼼한, 세심한', example: 'She kept meticulous records of every transaction.', example_ko: '그녀는 모든 거래를 꼼꼼히 기록했어요.', synonyms: '세심한' },
        { front: 'pragmatic', back: '실용적인', example: 'We need a pragmatic solution, not an ideal one.', example_ko: '우리는 이상적인 해결책이 아니라 실용적인 해결책이 필요해요.', synonyms: '현실적인' },
        { front: 'paradox', back: '역설', example: 'It is a paradox that saving often means spending less to earn more later.', example_ko: '저축이 나중에 더 벌기 위해 덜 쓰는 것을 뜻한다는 것은 역설이에요.', synonyms: '' },
        { front: 'nuanced', back: '미묘한 차이가 있는', example: 'Her opinion on the matter is quite nuanced.', example_ko: '그 문제에 대한 그녀의 의견은 꽤 미묘한 차이가 있어요.', synonyms: '' },
        { front: 'discrepancy', back: '불일치, 차이', example: "There's a discrepancy between the two reports.", example_ko: '두 보고서 사이에 불일치가 있어요.', synonyms: '차이' },
        { front: 'tenacious', back: '끈질긴, 집요한', example: "She's tenacious when it comes to negotiations.", example_ko: '그녀는 협상에 있어서 끈질겨요.', synonyms: '집요한' },
        { front: 'subtle', back: '미묘한, 은은한', example: "There's a subtle difference between the two colors.", example_ko: '두 색깔 사이에는 미묘한 차이가 있어요.', synonyms: '섬세한' },
        { front: 'profound', back: '심오한, 깊은', example: 'The book had a profound effect on me.', example_ko: '그 책은 저에게 심오한 영향을 미쳤어요.', synonyms: '깊은' },
        { front: 'skeptical', back: '회의적인', example: "I'm skeptical about these new claims.", example_ko: '저는 이 새로운 주장들에 대해 회의적이에요.', synonyms: '' },
        { front: 'inevitable', back: '불가피한', example: 'Change was inevitable in the end.', example_ko: '결국 변화는 불가피했어요.', synonyms: '피할 수 없는' },
        { front: 'candid', back: '솔직한, 있는 그대로의', example: 'He gave a candid account of what happened.', example_ko: '그는 일어난 일에 대해 솔직하게 설명했어요.', synonyms: '솔직한' },
        { front: 'innate', back: '타고난, 선천적인', example: 'She has an innate sense of rhythm.', example_ko: '그녀는 타고난 리듬감이 있어요.', synonyms: '선천적인' },
        { front: 'relentless', back: '끊임없는, 가차없는', example: 'His relentless work ethic impressed everyone.', example_ko: '그의 끊임없는 직업윤리는 모두를 감동시켰어요.', synonyms: '집요한' },
        { front: 'vindicate', back: '정당함을 입증하다', example: 'The new evidence vindicated her claims.', example_ko: '새로운 증거가 그녀의 주장이 옳음을 입증했어요.', synonyms: '' },
        { front: 'futile', back: '헛된, 소용없는', example: 'Their efforts to stop the flood were futile.', example_ko: '홍수를 막으려는 그들의 노력은 헛되었어요.', synonyms: '무의미한' },
        { front: 'impartial', back: '공정한, 편견 없는', example: 'A judge must remain impartial.', example_ko: '판사는 공정함을 유지해야 해요.', synonyms: '중립적인' },
        { front: 'austere', back: '엄격한, 검소한', example: 'He lived an austere life despite his wealth.', example_ko: '그는 부유함에도 불구하고 검소한 삶을 살았어요.', synonyms: '검소한' },
        { front: 'volatile', back: '변덕스러운, 불안정한', example: 'The stock market has been volatile this month.', example_ko: '이번 달 주식 시장은 아주 불안정했어요.', synonyms: '불안정한' },
        { front: 'dichotomy', back: '이분법', example: "There's a clear dichotomy between theory and practice.", example_ko: '이론과 실제 사이에는 명확한 이분법이 있어요.', synonyms: '' },
        { front: 'quintessential', back: '전형적인, 정수를 보여주는', example: 'He is the quintessential example of a self-made success.', example_ko: '그는 자수성가한 성공의 전형적인 예예요.', synonyms: '전형적인' },
      ]}
    ]
  },
  '중국어': {
    'HSK1': [
      { name: '중국어 HSK1', icon: '🌱', words: [
        { front: '苹果', pinyin: 'píng guǒ', back: '사과', example: '我每天吃一个苹果。', example_ko: '저는 매일 사과 하나를 먹어요.', synonyms: '' },
        { front: '谢谢', pinyin: 'xiè xie', back: '고마워요, 감사합니다', example: '谢谢你的帮助。', example_ko: '도와줘서 고마워요.', synonyms: '감사해요' },
        { front: '再见', pinyin: 'zài jiàn', back: '안녕(작별 인사)', example: '再见，明天见。', example_ko: '안녕, 내일 봐요.', synonyms: '잘 가' },
        { front: '爸爸', pinyin: 'bà ba', back: '아빠', example: '我爸爸是老师。', example_ko: '저희 아빠는 선생님이에요.', synonyms: '아버지' },
        { front: '妈妈', pinyin: 'mā ma', back: '엄마', example: '我妈妈做饭很好吃。', example_ko: '저희 엄마는 요리를 아주 잘하세요.', synonyms: '어머니' },
        { front: '朋友', pinyin: 'péng you', back: '친구', example: '他是我的好朋友。', example_ko: '그는 제 좋은 친구예요.', synonyms: '' },
        { front: '老师', pinyin: 'lǎo shī', back: '선생님', example: '我们的老师很好。', example_ko: '우리 선생님은 아주 좋으세요.', synonyms: '' },
        { front: '学生', pinyin: 'xué sheng', back: '학생', example: '我是一名学生。', example_ko: '저는 학생이에요.', synonyms: '' },
        { front: '学校', pinyin: 'xué xiào', back: '학교', example: '孩子们去学校。', example_ko: '아이들은 학교에 가요.', synonyms: '' },
        { front: '书', pinyin: 'shū', back: '책', example: '我在看一本有意思的书。', example_ko: '저는 재미있는 책을 읽고 있어요.', synonyms: '' },
        { front: '水', pinyin: 'shuǐ', back: '물', example: '请给我一杯水。', example_ko: '물 한 잔 주세요.', synonyms: '' },
        { front: '喜欢', pinyin: 'xǐ huan', back: '좋아하다', example: '我喜欢音乐。', example_ko: '저는 음악을 좋아해요.', synonyms: '' },
        { front: '吃', pinyin: 'chī', back: '먹다', example: '我喜欢吃水果。', example_ko: '저는 과일 먹는 것을 좋아해요.', synonyms: '' },
        { front: '喝', pinyin: 'hē', back: '마시다', example: '我要喝咖啡。', example_ko: '저는 커피를 마실 거예요.', synonyms: '' },
        { front: '看', pinyin: 'kàn', back: '보다', example: '我在看电视。', example_ko: '저는 텔레비전을 보고 있어요.', synonyms: '' },
        { front: '去', pinyin: 'qù', back: '가다', example: '我去商店。', example_ko: '저는 가게에 가요.', synonyms: '' },
        { front: '来', pinyin: 'lái', back: '오다', example: '你什么时候来？', example_ko: '언제 오실 거예요?', synonyms: '' },
        { front: '大', pinyin: 'dà', back: '크다', example: '那只狗很大。', example_ko: '저 개는 아주 커요.', synonyms: '' },
        { front: '小', pinyin: 'xiǎo', back: '작다', example: '我有一辆小汽车。', example_ko: '저는 작은 차가 있어요.', synonyms: '' },
        { front: '多', pinyin: 'duō', back: '많다', example: '今天的作业很多。', example_ko: '오늘 숙제가 아주 많아요.', synonyms: '' },
        { front: '今天', pinyin: 'jīn tiān', back: '오늘', example: '今天是个好天气。', example_ko: '오늘은 날씨가 좋아요.', synonyms: '' },
        { front: '明天', pinyin: 'míng tiān', back: '내일', example: '明天我们见面吧。', example_ko: '내일 우리 만나요.', synonyms: '' },
        { front: '昨天', pinyin: 'zuó tiān', back: '어제', example: '昨天我很忙。', example_ko: '어제 저는 아주 바빴어요.', synonyms: '' },
        { front: '漂亮', pinyin: 'piào liang', back: '예쁘다', example: '这件衣服很漂亮。', example_ko: '이 옷은 아주 예뻐요.', synonyms: '아름답다' },
        { front: '高兴', pinyin: 'gāo xìng', back: '기쁘다', example: '认识你我很高兴。', example_ko: '당신을 만나서 기뻐요.', synonyms: '기분 좋다' },
      ]}
    ],
    'HSK2': [
      { name: '중국어 HSK2', icon: '🌿', words: [
        { front: '帮助', pinyin: 'bāng zhù', back: '돕다, 도움', example: '谢谢你的帮助。', example_ko: '당신의 도움에 감사해요.', synonyms: '도움' },
        { front: '报纸', pinyin: 'bào zhǐ', back: '신문', example: '爸爸每天看报纸。', example_ko: '아빠는 매일 신문을 봐요.', synonyms: '' },
        { front: '唱歌', pinyin: 'chàng gē', back: '노래를 부르다', example: '她唱歌唱得很好。', example_ko: '그녀는 노래를 아주 잘 불러요.', synonyms: '' },
        { front: '哥哥', pinyin: 'gē ge', back: '형, 오빠', example: '我哥哥比我大三岁。', example_ko: '저희 형은 저보다 세 살 많아요.', synonyms: '' },
        { front: '姐姐', pinyin: 'jiě jie', back: '언니, 누나', example: '我姐姐在银行工作。', example_ko: '저희 언니는 은행에서 일해요.', synonyms: '' },
        { front: '弟弟', pinyin: 'dì di', back: '남동생', example: '我弟弟在踢足球。', example_ko: '제 남동생은 축구를 하고 있어요.', synonyms: '' },
        { front: '妹妹', pinyin: 'mèi mei', back: '여동생', example: '我妹妹喜欢唱歌。', example_ko: '제 여동생은 노래 부르는 것을 좋아해요.', synonyms: '' },
        { front: '房间', pinyin: 'fáng jiān', back: '방', example: '我的房间不太大。', example_ko: '제 방은 그다지 크지 않아요.', synonyms: '' },
        { front: '高', pinyin: 'gāo', back: '(키가) 크다, 높다', example: '他比我高很多。', example_ko: '그는 저보다 키가 훨씬 커요.', synonyms: '' },
        { front: '公司', pinyin: 'gōng sī', back: '회사', example: '他在一家大公司工作。', example_ko: '그는 큰 회사에서 일해요.', synonyms: '' },
        { front: '贵', pinyin: 'guì', back: '비싸다', example: '这件衣服太贵了。', example_ko: '이 옷은 너무 비싸요.', synonyms: '' },
        { front: '孩子', pinyin: 'hái zi', back: '아이', example: '那个孩子很聪明。', example_ko: '저 아이는 아주 똑똑해요.', synonyms: '어린이' },
        { front: '好吃', pinyin: 'hǎo chī', back: '맛있다', example: '这个菜很好吃。', example_ko: '이 음식은 아주 맛있어요.', synonyms: '' },
        { front: '快乐', pinyin: 'kuài lè', back: '행복하다, 즐겁다', example: '祝你生日快乐！', example_ko: '생일 축하해요!', synonyms: '행복한' },
        { front: '累', pinyin: 'lèi', back: '피곤하다', example: '今天工作了一天，我很累。', example_ko: '오늘 하루 종일 일해서 저는 아주 피곤해요.', synonyms: '지치다' },
        { front: '慢', pinyin: 'màn', back: '느리다', example: '他说话说得很慢。', example_ko: '그는 아주 천천히 말해요.', synonyms: '' },
        { front: '忙', pinyin: 'máng', back: '바쁘다', example: '最近工作很忙。', example_ko: '요즘 일이 아주 바빠요.', synonyms: '' },
        { front: '便宜', pinyin: 'pián yi', back: '(값이) 싸다', example: '这个市场的水果很便宜。', example_ko: '이 시장의 과일은 아주 싸요.', synonyms: '' },
        { front: '身体', pinyin: 'shēn tǐ', back: '몸, 건강', example: '你要注意身体。', example_ko: '건강에 신경 쓰세요.', synonyms: '' },
        { front: '时间', pinyin: 'shí jiān', back: '시간', example: '我们没有时间了。', example_ko: '우리는 시간이 없어요.', synonyms: '' },
        { front: '手机', pinyin: 'shǒu jī', back: '휴대폰', example: '我的手机没电了。', example_ko: '제 휴대폰 배터리가 다 됐어요.', synonyms: '핸드폰' },
        { front: '跳舞', pinyin: 'tiào wǔ', back: '춤추다', example: '她很喜欢跳舞。', example_ko: '그녀는 춤추는 것을 아주 좋아해요.', synonyms: '' },
        { front: '希望', pinyin: 'xī wàng', back: '희망하다, 바라다', example: '我希望你能来。', example_ko: '저는 당신이 올 수 있기를 바라요.', synonyms: '바라다' },
        { front: '颜色', pinyin: 'yán sè', back: '색깔', example: '你喜欢什么颜色？', example_ko: '당신은 어떤 색을 좋아해요?', synonyms: '' },
        { front: '运动', pinyin: 'yùn dòng', back: '운동(하다)', example: '我每天早上运动。', example_ko: '저는 매일 아침 운동해요.', synonyms: '' },
      ]}
    ],
    'HSK3': [
      { name: '중국어 HSK3', icon: '🍀', words: [
        { front: '爱好', pinyin: 'ài hào', back: '취미', example: '我的爱好是画画。', example_ko: '제 취미는 그림 그리기예요.', synonyms: '' },
        { front: '安静', pinyin: 'ān jìng', back: '조용하다', example: '图书馆里很安静。', example_ko: '도서관 안은 아주 조용해요.', synonyms: '' },
        { front: '办法', pinyin: 'bàn fǎ', back: '방법', example: '我们得想个办法。', example_ko: '우리는 방법을 생각해내야 해요.', synonyms: '방식' },
        { front: '比较', pinyin: 'bǐ jiào', back: '비교적, 비교하다', example: '这个问题比较难。', example_ko: '이 문제는 비교적 어려워요.', synonyms: '' },
        { front: '比赛', pinyin: 'bǐ sài', back: '경기, 시합', example: '昨天的比赛很精彩。', example_ko: '어제 경기는 아주 멋졌어요.', synonyms: '시합' },
        { front: '参加', pinyin: 'cān jiā', back: '참가하다', example: '我打算参加这次比赛。', example_ko: '저는 이번 경기에 참가할 계획이에요.', synonyms: '참여하다' },
        { front: '城市', pinyin: 'chéng shì', back: '도시', example: '上海是一个大城市。', example_ko: '상하이는 큰 도시예요.', synonyms: '' },
        { front: '词典', pinyin: 'cí diǎn', back: '사전', example: '我用词典查生词。', example_ko: '저는 사전으로 새 단어를 찾아요.', synonyms: '' },
        { front: '聪明', pinyin: 'cōng ming', back: '똑똑하다, 총명하다', example: '他是个聪明的孩子。', example_ko: '그는 똑똑한 아이예요.', synonyms: '' },
        { front: '打算', pinyin: 'dǎ suàn', back: '계획하다, ~할 생각이다', example: '你打算什么时候出发？', example_ko: '언제 출발할 계획이에요?', synonyms: '' },
        { front: '担心', pinyin: 'dān xīn', back: '걱정하다', example: '别担心，一切都会好的。', example_ko: '걱정하지 마세요, 다 잘될 거예요.', synonyms: '' },
        { front: '地铁', pinyin: 'dì tiě', back: '지하철', example: '我坐地铁上班。', example_ko: '저는 지하철을 타고 출근해요.', synonyms: '' },
        { front: '方便', pinyin: 'fāng biàn', back: '편리하다', example: '网上购物很方便。', example_ko: '온라인 쇼핑은 아주 편리해요.', synonyms: '' },
        { front: '复习', pinyin: 'fù xí', back: '복습하다', example: '考试前我要复习。', example_ko: '시험 전에 저는 복습해야 해요.', synonyms: '' },
        { front: '干净', pinyin: 'gān jìng', back: '깨끗하다', example: '他的房间总是很干净。', example_ko: '그의 방은 항상 깨끗해요.', synonyms: '청결하다' },
        { front: '关系', pinyin: 'guān xi', back: '관계', example: '他们的关系很好。', example_ko: '그들의 관계는 아주 좋아요.', synonyms: '' },
        { front: '国家', pinyin: 'guó jiā', back: '국가, 나라', example: '这是一个美丽的国家。', example_ko: '이곳은 아름다운 나라예요.', synonyms: '나라' },
        { front: '环境', pinyin: 'huán jìng', back: '환경', example: '我们要保护环境。', example_ko: '우리는 환경을 보호해야 해요.', synonyms: '' },
        { front: '机会', pinyin: 'jī huì', back: '기회', example: '这是一个很好的机会。', example_ko: '이것은 아주 좋은 기회예요.', synonyms: '' },
        { front: '健康', pinyin: 'jiàn kāng', back: '건강(하다)', example: '运动对健康很好。', example_ko: '운동은 건강에 아주 좋아요.', synonyms: '' },
        { front: '决定', pinyin: 'jué dìng', back: '결정하다', example: '我已经决定了。', example_ko: '저는 이미 결정했어요.', synonyms: '' },
        { front: '历史', pinyin: 'lì shǐ', back: '역사', example: '他对历史很感兴趣。', example_ko: '그는 역사에 관심이 많아요.', synonyms: '' },
        { front: '满意', pinyin: 'mǎn yì', back: '만족하다', example: '老板对结果很满意。', example_ko: '사장님은 결과에 만족하셨어요.', synonyms: '' },
        { front: '努力', pinyin: 'nǔ lì', back: '노력하다', example: '只要努力，就会成功。', example_ko: '노력하기만 하면 성공할 거예요.', synonyms: '' },
        { front: '世界', pinyin: 'shì jiè', back: '세계', example: '他去过很多世界各地。', example_ko: '그는 세계 여러 곳을 가봤어요.', synonyms: '' },
      ]}
    ],
    'HSK4': [
      { name: '중국어 HSK4', icon: '🌳', words: [
        { front: '安排', pinyin: 'ān pái', back: '준비하다, 계획하다', example: '会议安排在下午三点。', example_ko: '회의는 오후 세 시로 준비되어 있어요.', synonyms: '' },
        { front: '安全', pinyin: 'ān quán', back: '안전(하다)', example: '开车时安全最重要。', example_ko: '운전할 때는 안전이 가장 중요해요.', synonyms: '' },
        { front: '保护', pinyin: 'bǎo hù', back: '보호하다', example: '我们应该保护动物。', example_ko: '우리는 동물을 보호해야 해요.', synonyms: '' },
        { front: '成功', pinyin: 'chéng gōng', back: '성공(하다)', example: '他终于成功了。', example_ko: '그는 마침내 성공했어요.', synonyms: '' },
        { front: '诚实', pinyin: 'chéng shí', back: '정직하다', example: '做人要诚实。', example_ko: '사람은 정직해야 해요.', synonyms: '' },
        { front: '感动', pinyin: 'gǎn dòng', back: '감동하다', example: '这部电影让我很感动。', example_ko: '이 영화는 저를 아주 감동시켰어요.', synonyms: '' },
        { front: '感觉', pinyin: 'gǎn jué', back: '느끼다, 느낌', example: '我感觉今天不太顺利。', example_ko: '저는 오늘 일이 그다지 순조롭지 않다고 느껴요.', synonyms: '' },
        { front: '感谢', pinyin: 'gǎn xiè', back: '감사하다', example: '非常感谢你的帮助。', example_ko: '당신의 도움에 정말 감사해요.', synonyms: '고맙다' },
        { front: '改变', pinyin: 'gǎi biàn', back: '바꾸다, 변화하다', example: '这次经历改变了他的想法。', example_ko: '이번 경험은 그의 생각을 바꿔놓았어요.', synonyms: '' },
        { front: '鼓励', pinyin: 'gǔ lì', back: '격려하다', example: '老师一直鼓励我们。', example_ko: '선생님은 항상 우리를 격려해 주세요.', synonyms: '' },
        { front: '管理', pinyin: 'guǎn lǐ', back: '관리하다', example: '她负责管理这个团队。', example_ko: '그녀는 이 팀을 관리하는 책임을 맡고 있어요.', synonyms: '' },
        { front: '经济', pinyin: 'jīng jì', back: '경제', example: '这个国家的经济发展很快。', example_ko: '이 나라의 경제는 빠르게 발전하고 있어요.', synonyms: '' },
        { front: '经验', pinyin: 'jīng yàn', back: '경험', example: '他在这方面很有经验。', example_ko: '그는 이 분야에서 경험이 많아요.', synonyms: '' },
        { front: '紧张', pinyin: 'jǐn zhāng', back: '긴장하다', example: '面试前她很紧张。', example_ko: '면접 전에 그녀는 아주 긴장했어요.', synonyms: '' },
        { front: '竞争', pinyin: 'jìng zhēng', back: '경쟁하다', example: '市场竞争非常激烈。', example_ko: '시장 경쟁이 아주 치열해요.', synonyms: '' },
        { front: '拒绝', pinyin: 'jù jué', back: '거절하다', example: '他拒绝了我的请求。', example_ko: '그는 제 부탁을 거절했어요.', synonyms: '' },
        { front: '距离', pinyin: 'jù lí', back: '거리', example: '学校离我家的距离不远。', example_ko: '학교는 우리 집에서 거리가 멀지 않아요.', synonyms: '' },
        { front: '开心', pinyin: 'kāi xīn', back: '기쁘다, 즐겁다', example: '看到你我很开心。', example_ko: '당신을 보니 아주 기뻐요.', synonyms: '즐겁다' },
        { front: '考虑', pinyin: 'kǎo lǜ', back: '고려하다', example: '这个建议值得考虑。', example_ko: '이 제안은 고려할 가치가 있어요.', synonyms: '' },
        { front: '科学', pinyin: 'kē xué', back: '과학', example: '他对科学很感兴趣。', example_ko: '그는 과학에 관심이 많아요.', synonyms: '' },
        { front: '困难', pinyin: 'kùn nan', back: '어려움, 곤란', example: '我们遇到了很多困难。', example_ko: '우리는 많은 어려움을 겪었어요.', synonyms: '' },
        { front: '理解', pinyin: 'lǐ jiě', back: '이해하다', example: '我完全理解你的想法。', example_ko: '저는 당신의 생각을 완전히 이해해요.', synonyms: '' },
        { front: '理想', pinyin: 'lǐ xiǎng', back: '이상, 꿈', example: '他的理想是当医生。', example_ko: '그의 꿈은 의사가 되는 거예요.', synonyms: '꿈' },
        { front: '旅行', pinyin: 'lǚ xíng', back: '여행하다', example: '我们计划去欧洲旅行。', example_ko: '우리는 유럽으로 여행을 갈 계획이에요.', synonyms: '' },
        { front: '浪漫', pinyin: 'làng màn', back: '낭만적인, 로맨틱한', example: '巴黎是一个很浪漫的城市。', example_ko: '파리는 아주 낭만적인 도시예요.', synonyms: '' },
      ]}
    ],
    'HSK5': [
      { name: '중국어 HSK5', icon: '🎋', words: [
        { front: '安慰', pinyin: 'ān wèi', back: '위로하다', example: '朋友们都来安慰她。', example_ko: '친구들이 모두 그녀를 위로하러 왔어요.', synonyms: '' },
        { front: '保持', pinyin: 'bǎo chí', back: '유지하다', example: '他一直保持微笑。', example_ko: '그는 계속 미소를 유지했어요.', synonyms: '' },
        { front: '表达', pinyin: 'biǎo dá', back: '표현하다', example: '她很会表达自己的感情。', example_ko: '그녀는 자신의 감정을 잘 표현해요.', synonyms: '' },
        { front: '表现', pinyin: 'biǎo xiàn', back: '나타내다, 행동, 표현', example: '他这次考试表现得很好。', example_ko: '그는 이번 시험에서 잘했어요.', synonyms: '' },
        { front: '产品', pinyin: 'chǎn pǐn', back: '제품, 상품', example: '这家公司的产品很受欢迎。', example_ko: '이 회사의 제품은 아주 인기가 많아요.', synonyms: '상품' },
        { front: '产生', pinyin: 'chǎn shēng', back: '생기다, 발생하다', example: '这个决定产生了很大的影响。', example_ko: '이 결정은 큰 영향을 발생시켰어요.', synonyms: '' },
        { front: '成就', pinyin: 'chéng jiù', back: '성취, 업적', example: '这是他一生的成就。', example_ko: '이것은 그의 일생의 업적이에요.', synonyms: '업적' },
        { front: '成熟', pinyin: 'chéng shú', back: '성숙하다', example: '他比以前成熟多了。', example_ko: '그는 예전보다 훨씬 성숙해졌어요.', synonyms: '' },
        { front: '承认', pinyin: 'chéng rèn', back: '인정하다', example: '他终于承认了自己的错误。', example_ko: '그는 마침내 자신의 잘못을 인정했어요.', synonyms: '' },
        { front: '程度', pinyin: 'chéng dù', back: '정도', example: '他的汉语已经到了很高的程度。', example_ko: '그의 중국어는 이미 아주 높은 수준에 이르렀어요.', synonyms: '수준' },
        { front: '传统', pinyin: 'chuán tǒng', back: '전통(적인)', example: '这是我们家的传统。', example_ko: '이것은 우리 가족의 전통이에요.', synonyms: '' },
        { front: '创造', pinyin: 'chuàng zào', back: '창조하다', example: '他们创造了一个新纪录。', example_ko: '그들은 새로운 기록을 만들어냈어요.', synonyms: '만들어내다' },
        { front: '存在', pinyin: 'cún zài', back: '존재하다', example: '这个问题一直存在。', example_ko: '이 문제는 계속 존재해요.', synonyms: '' },
        { front: '达到', pinyin: 'dá dào', back: '도달하다, 달성하다', example: '他终于达到了自己的目标。', example_ko: '그는 마침내 자신의 목표를 달성했어요.', synonyms: '이루다' },
        { front: '代表', pinyin: 'dài biǎo', back: '대표하다', example: '这幅画代表了他的风格。', example_ko: '이 그림은 그의 스타일을 대표해요.', synonyms: '' },
        { front: '道德', pinyin: 'dào dé', back: '도덕', example: '这是一个道德问题。', example_ko: '이것은 도덕적 문제예요.', synonyms: '' },
        { front: '地位', pinyin: 'dì wèi', back: '지위', example: '她在公司的地位很高。', example_ko: '그녀는 회사에서 지위가 높아요.', synonyms: '' },
        { front: '独立', pinyin: 'dú lì', back: '독립하다, 독립적인', example: '他很小的时候就很独立。', example_ko: '그는 아주 어릴 때부터 독립적이었어요.', synonyms: '' },
        { front: '独特', pinyin: 'dú tè', back: '독특하다', example: '她的风格很独特。', example_ko: '그녀의 스타일은 아주 독특해요.', synonyms: '' },
        { front: '反应', pinyin: 'fǎn yìng', back: '반응(하다)', example: '大家对这个消息反应很大。', example_ko: '모두가 이 소식에 크게 반응했어요.', synonyms: '' },
        { front: '反映', pinyin: 'fǎn yìng', back: '반영하다', example: '这份报告反映了真实的情况。', example_ko: '이 보고서는 실제 상황을 반영해요.', synonyms: '' },
        { front: '范围', pinyin: 'fàn wéi', back: '범위', example: '这个问题超出了我的范围。', example_ko: '이 문제는 제 범위를 벗어났어요.', synonyms: '' },
        { front: '方式', pinyin: 'fāng shì', back: '방식', example: '每个人的学习方式不一样。', example_ko: '사람마다 학습 방식이 달라요.', synonyms: '' },
        { front: '发挥', pinyin: 'fā huī', back: '발휘하다', example: '他在比赛中发挥得很好。', example_ko: '그는 경기에서 실력을 잘 발휘했어요.', synonyms: '' },
        { front: '发明', pinyin: 'fā míng', back: '발명하다', example: '谁发明了电话？', example_ko: '누가 전화를 발명했어요?', synonyms: '' },
      ]}
    ],
    'HSK6': [
      { name: '중국어 HSK6', icon: '🏔️', words: [
        { front: '摆脱', pinyin: 'bǎi tuō', back: '벗어나다, 떨쳐내다', example: '他终于摆脱了那段痛苦的回忆。', example_ko: '그는 마침내 그 괴로운 기억에서 벗어났어요.', synonyms: '' },
        { front: '保守', pinyin: 'bǎo shǒu', back: '보수적인', example: '他的想法比较保守。', example_ko: '그의 생각은 비교적 보수적이에요.', synonyms: '' },
        { front: '暴露', pinyin: 'bào lù', back: '폭로하다, 드러내다', example: '这次事件暴露了很多问题。', example_ko: '이번 사건은 많은 문제를 드러냈어요.', synonyms: '' },
        { front: '爆发', pinyin: 'bào fā', back: '폭발하다, 발발하다', example: '战争在那一年爆发了。', example_ko: '전쟁은 그해에 발발했어요.', synonyms: '' },
        { front: '悲惨', pinyin: 'bēi cǎn', back: '비참하다', example: '他讲述了一个悲惨的故事。', example_ko: '그는 비참한 이야기를 들려주었어요.', synonyms: '' },
        { front: '本能', pinyin: 'běn néng', back: '본능', example: '保护孩子是母亲的本能。', example_ko: '아이를 보호하는 것은 어머니의 본능이에요.', synonyms: '' },
        { front: '崩溃', pinyin: 'bēng kuì', back: '붕괴하다, 무너지다', example: '整个系统突然崩溃了。', example_ko: '전체 시스템이 갑자기 붕괴됐어요.', synonyms: '' },
        { front: '边缘', pinyin: 'biān yuán', back: '가장자리, 경계', example: '这个物种正处于灭绝的边缘。', example_ko: '이 종은 멸종 위기의 경계에 처해 있어요.', synonyms: '' },
        { front: '便利', pinyin: 'biàn lì', back: '편리하다', example: '网络给我们带来了很多便利。', example_ko: '인터넷은 우리에게 많은 편리함을 가져다줬어요.', synonyms: '' },
        { front: '财富', pinyin: 'cái fù', back: '재산, 부', example: '健康比财富更重要。', example_ko: '건강은 재산보다 더 중요해요.', synonyms: '' },
        { front: '残酷', pinyin: 'cán kù', back: '잔혹하다', example: '现实有时非常残酷。', example_ko: '현실은 때때로 아주 잔혹해요.', synonyms: '' },
        { front: '灿烂', pinyin: 'càn làn', back: '찬란하다, 눈부시다', example: '她露出灿烂的笑容。', example_ko: '그녀는 눈부신 미소를 지었어요.', synonyms: '' },
        { front: '沉重', pinyin: 'chén zhòng', back: '무겁다, 심각하다', example: '这是一个沉重的话题。', example_ko: '이것은 심각한 주제예요.', synonyms: '' },
        { front: '陈旧', pinyin: 'chén jiù', back: '낡다, 진부하다', example: '这些设备已经很陈旧了。', example_ko: '이 설비들은 이미 아주 낡았어요.', synonyms: '' },
        { front: '成本', pinyin: 'chéng běn', back: '원가, 비용', example: '公司想办法降低成本。', example_ko: '회사는 비용을 낮출 방법을 찾고 있어요.', synonyms: '' },
        { front: '成员', pinyin: 'chéng yuán', back: '구성원', example: '他是我们团队的重要成员。', example_ko: '그는 우리 팀의 중요한 구성원이에요.', synonyms: '' },
        { front: '呈现', pinyin: 'chéng xiàn', back: '나타나다, 드러내다', example: '这幅画呈现出独特的风格。', example_ko: '이 그림은 독특한 스타일을 나타내요.', synonyms: '' },
        { front: '承诺', pinyin: 'chéng nuò', back: '약속하다', example: '他承诺会按时完成任务。', example_ko: '그는 제시간에 임무를 완수하겠다고 약속했어요.', synonyms: '' },
        { front: '惩罚', pinyin: 'chéng fá', back: '처벌하다', example: '违反规定的人会受到惩罚。', example_ko: '규정을 어긴 사람은 처벌을 받을 거예요.', synonyms: '' },
        { front: '潮流', pinyin: 'cháo liú', back: '흐름, 추세', example: '这种设计代表了新的潮流。', example_ko: '이런 디자인은 새로운 흐름을 대표해요.', synonyms: '' },
        { front: '嘲笑', pinyin: 'cháo xiào', back: '비웃다, 조롱하다', example: '不要嘲笑别人的失败。', example_ko: '다른 사람의 실패를 비웃지 마세요.', synonyms: '' },
        { front: '场合', pinyin: 'chǎng hé', back: '상황, 경우', example: '在正式场合要注意礼貌。', example_ko: '공식적인 상황에서는 예의를 신경 써야 해요.', synonyms: '' },
        { front: '超越', pinyin: 'chāo yuè', back: '뛰어넘다, 초월하다', example: '他超越了自己的极限。', example_ko: '그는 자신의 한계를 뛰어넘었어요.', synonyms: '' },
        { front: '尝试', pinyin: 'cháng shì', back: '시도하다', example: '他勇敢地尝试了新方法。', example_ko: '그는 용감하게 새로운 방법을 시도했어요.', synonyms: '' },
        { front: '阐述', pinyin: 'chǎn shù', back: '설명하다, 상세히 논술하다', example: '他详细阐述了自己的观点。', example_ko: '그는 자신의 관점을 상세히 설명했어요.', synonyms: '' },
      ]}
    ]
  }
};
const state = {
  screen: 'home', drawer: false, language: '스페인어', deckId: null, nickname: '',
  round: [], roundIndex: 0, roundDeckId: null, unknownIds: [], studyDone: false,
  revealed: false, shuffle: false,
  quizType: 'choice', quizSource: 'deck', quizIndex: 0, answered: null,
  mistakes: [], dark: localStorage.getItem('lingo-dark') === 'true', modal: null,
  user: null, authMode: 'login', pendingShare: null,
  ocrCandidates: [], ocrBusy: false, aiMessages: [], aiBusy: false, onboard: null, userLevels: {},
  deckMode: localStorage.getItem('lingo-deck-mode') || 'course',
  levelTest: null
};
let decks = [];

const $ = (s) => document.querySelector(s);
const modeDecks = () => decks.filter(d => d.language === state.language && d.source === state.deckMode);
const deck = () => decks.find(d => d.id === state.deckId) || modeDecks()[0] || decks.find(d => d.language === state.language) || decks[0] || { id: null, name: '', icon: '📚', words: [] };
const escape = (text) => String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
const normalise = v => v.toLowerCase().normalize('NFD').replace(/[̀-ͯ\s.,!?¿¡]/g,'');
const normalisePinyin = v => v.toLowerCase().trim().replace(/\s+/g,' ');
const shuffleArr = arr => [...arr].sort(() => .5 - Math.random());
const langFlag = l => l === '영어' ? '🇬🇧' : l === '중국어' ? '🇨🇳' : '🇪🇸';
function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${name}" /></svg>`; }

function render() {
  document.body.classList.toggle('dark', state.dark);
  $('#app').innerHTML = `${symbols()}<main class="shell">${header()}${content()}${nav()}</main>${drawer()}${modal()}`;
  bind();
}
function symbols() { return `<svg class="symbols" xmlns="http://www.w3.org/2000/svg"><symbol id="menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol><symbol id="home" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-6h6v6"/></symbol><symbol id="book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></symbol><symbol id="plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol><symbol id="chev" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol><symbol id="shuffle" viewBox="0 0 24 24"><path d="m16 3 4 4-4 4M4 7h3c4 0 5 10 10 10h3M20 17l-4 4M4 17h3c1.8 0 3-2 4.2-4"/></symbol><symbol id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol><symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"/></symbol><symbol id="settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.2 2.2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3.2v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.2-2.2.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5v-3.2h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.2-2.2.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3.5h3.2v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.2 2.2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V13h-.2a1.7 1.7 0 0 0-1.5 2Z"/></symbol><symbol id="quiz" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.5 2.5 0 1 1 3.9 2.4c-.8.5-1.4 1-1.4 2"/><path d="M12 17h.01"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.6-6.3"/><path d="M3 4v5h5"/></symbol></svg>`; }
function header() {
  const name = state.nickname || state.user?.email?.split('@')[0] || '';
  const title = !state.user ? 'PolyGo에 오신 걸 환영해요' : state.screen === 'nickname' ? '거의 다 왔어요' : state.screen === 'onboarding' ? '시작하기' : state.screen === 'home' ? `${GREETINGS[state.language]||'안녕'}, ${escape(name)}님` : state.screen === 'study' ? deck().name : state.screen === 'quiz' ? '퀴즈' : state.screen === 'mistakes' ? '오답 노트' : state.screen === 'ai' ? 'AI 튜터' : state.screen === 'completed' ? '완료한 단어장' : state.screen === 'level-test' ? '레벨 테스트' : '새 단어장';
  return `<header><div><p class="eyebrow">${!state.user ? '나만의 언어 학습 공간' : state.screen === 'nickname' ? '한 걸음만 더' : state.screen === 'onboarding' ? '거의 다 됐어요' : state.screen === 'home' ? '오늘도 한 걸음씩' : state.screen === 'level-test' ? '몇 개만 풀어보면 알 수 있어요' : state.language}</p><h1>${title}</h1></div>${state.user && state.screen!=='onboarding' && state.screen!=='nickname'?`<button class="icon-btn" data-action="drawer">${icon('menu')}</button>`:''}</header>`;
}
function content() { return `<section class="content">${!configured ? setup() : !state.user ? auth() : state.screen === 'nickname' ? nicknameSetup() : state.screen === 'onboarding' ? onboarding() : state.screen === 'home' ? home() : state.screen === 'study' ? study() : state.screen === 'quiz' ? quiz() : state.screen === 'mistakes' ? mistakes() : state.screen === 'ai' ? aiChat() : state.screen === 'completed' ? completedDecksScreen() : state.screen === 'level-test' ? levelTestScreen() : create()}</section>`; }
function setup(){return `<div class="empty"><div>⚙</div><h2>서버 연결을 준비해 주세요</h2><p>config.js에 Supabase 주소와 Publishable key를 넣으면 회원가입과 클라우드 저장을 시작할 수 있어요.</p></div>`}
function auth(){const signup=state.authMode==='signup';return `<div class="auth-card"><div class="auth-mark">P</div><h2>${signup?'회원가입':'로그인'}</h2><p>${signup?'가입 방법을 골라주세요. 닉네임은 다음 단계에서 정해요.':'어디서든 내 단어장을 이어서 학습하세요.'}</p><div class="oauth-grid"><button class="oauth-btn kakao" data-action="oauth-kakao">카카오</button><button class="oauth-btn naver" data-action="oauth-naver">네이버</button><button class="oauth-btn google" data-action="oauth-google">Google</button></div><div class="auth-divider"><span>또는 이메일로 ${signup?'가입':'로그인'}</span></div><form id="auth-form"><label>이메일<input type="email" name="email" required autocomplete="email" placeholder="name@example.com" /></label><label>비밀번호<input type="password" name="password" required minlength="8" autocomplete="${signup?'new-password':'current-password'}" placeholder="8자 이상" /></label>${signup?'<label>비밀번호 확인<input type="password" name="passwordConfirm" required minlength="8" autocomplete="new-password" placeholder="비밀번호를 다시 입력하세요" /></label>':''}<button class="primary" type="submit">${signup?'이메일로 가입하기':'로그인'}</button></form><button class="auth-switch" data-action="auth-mode">${signup?'이미 계정이 있나요? 로그인':'계정이 없나요? 회원가입'}</button></div>`}
function nicknameSetup(){return `<div class="auth-card"><div class="auth-mark">P</div><h2>닉네임을 알려주세요</h2><p>다른 사람에게는 보이지 않고, 앱 안에서 인사할 때만 사용해요.</p><form id="nickname-form"><label>닉네임<input type="text" name="nickname" required minlength="1" maxlength="30" placeholder="다른 사람에게 보여질 이름" autofocus /></label><button class="primary" type="submit">시작하기</button></form></div>`}
function languagePill(){return `<button class="language-pill" data-action="language">${langFlag(state.language)} ${state.language} ${icon('chev')}</button>`;}
function langHeroArt(l){ return l==='영어'?'Hello!':l==='중국어'?'你好!':'¡Hola!'; }
function modePill() {
  const isCourse = state.deckMode === 'course';
  return `<button class="language-pill" data-action="mode-modal">${isCourse?'📘 코스 학습':'📓 내 단어장'} ${icon('chev')}</button>`;
}
function home() {
  const allLangDecks = modeDecks();
  const langDecks = allLangDecks.filter(d=>!d.completed);
  const doneCount = allLangDecks.length - langDecks.length;
  const d = deck();
  const isCourse = state.deckMode === 'course';
  const emptyHint = isCourse
    ? `<div class="empty"><div>📘</div><h2>아직 코스 단어장이 없어요</h2><p>학습 레벨을 고르면 그 레벨에 맞는 단어장이 생겨요.</p><button class="primary" data-action="level-modal">레벨 고르기</button></div>`
    : `<div class="empty"><div>＋</div><h2>아직 내 단어장이 없어요</h2><p>단어를 직접 추가해서 나만의 단어장을 만들어 보세요.</p><button class="primary" data-screen="create">단어장 만들기</button></div>`;
  return `${languagePill()}${modePill()}${langDecks.length?`<section class="hero"><div><span>LAST STUDIED</span><h2>${escape(d.name||'단어장 없음')}</h2><p>${(d.words||[]).length}개의 단어</p></div><div class="hero-art">${langHeroArt(state.language)}<small>✦</small></div></section><div class="section-title"><h2>${isCourse?'코스 단어장':'내 단어장'}</h2>${isCourse?'':'<button data-screen="create">+ 만들기</button>'}</div><div class="deck-list">${langDecks.map(dk=>`<div class="deck-item"><button class="deck-row" data-deck="${dk.id}"><span class="deck-icon">${dk.icon}</span><span><b>${escape(dk.name)}</b><small>${dk.words.length}개의 단어</small></span>${icon('chev')}</button><button class="deck-row-delete" data-action="delete-deck" data-deck="${dk.id}" data-name="${escape(dk.name)}">🗑</button></div>`).join('')}</div>`:emptyHint}${doneCount?`<button class="link-more" data-screen="completed">✓ 완료한 단어장 (${doneCount}개) 보기</button>`:''}<div class="section-title"><h2>학습 도구</h2></div><div class="tools"><button data-screen="quiz"><span>✎</span><b>퀴즈 풀기</b><small>기억을 확인해요</small></button><button data-screen="mistakes"><span>◉</span><b>오답 노트</b><small>${state.mistakes.length}개 저장됨</small></button></div>`;
}
function completedDecksScreen() {
  const doneDecks = decks.filter(d=>d.language===state.language && d.source===state.deckMode && d.completed);
  if (!doneDecks.length) return `${languagePill()}<div class="empty"><div>✓</div><h2>완료한 단어장이 없어요</h2><p>학습을 마친 단어장에서 "학습 종료"를 누르면 여기에 모여요.</p></div>`;
  return `${languagePill()}<p class="intro">학습을 마친 단어장이에요. 눌러서 다시 볼 수 있어요.</p><div class="deck-list">${doneDecks.map(dk=>`<button class="deck-row" data-deck="${dk.id}"><span class="deck-icon">${dk.icon}</span><span><b>${escape(dk.name)}</b><small>${dk.words.length}개의 단어</small></span>${icon('chev')}</button>`).join('')}</div>`;
}
function study() {
  const d = deck();
  if (!d.words.length) return `${languagePill()}<div class="empty"><div>＋</div><h2>아직 단어가 없어요</h2><p>단어장에 첫 단어를 추가해 보세요.</p><button class="primary" data-screen="create">단어 추가하기</button></div>`;
  if (!state.round.length && !state.studyDone) startRound();
  const completeBtn = `<button class="toggle" data-action="complete-deck" data-deck="${d.id}" data-name="${escape(d.name)}">✓ 학습 종료</button>`;
  if (state.studyDone) return `${languagePill()}<div class="empty"><div>✓</div><h2>단어장을 다 외웠어요!</h2><p>${escape(d.name)} 학습을 완료했어요.</p><button class="primary" data-action="restart-round">다시 학습하기</button><div style="margin-top:10px">${completeBtn}</div></div>`;
  const word = state.round[state.roundIndex];
  const extra = [word.pinyin, word.example, word.example_ko].filter(Boolean).join(' · ');
  return `${languagePill()}<div class="study-meta"><span>${state.roundIndex + 1} / ${state.round.length}</span><div style="display:flex;gap:6px">${completeBtn}<button class="toggle" data-action="share-deck">🔗 공유</button><button class="toggle ${state.shuffle?'on':''}" data-action="shuffle">${icon('shuffle')} 셔플</button></div></div><div class="progress"><i style="width:${((state.roundIndex+1)/state.round.length)*100}%"></i></div><button class="flashcard ${state.revealed?'revealed':''}" data-action="reveal"><span class="card-label">${state.revealed?'뜻':state.language}</span><strong>${state.revealed?word.back:word.front}</strong><em>${state.revealed?(extra||'뜻을 확인했어요'):'카드를 눌러 뜻 확인하기'}</em><small>${state.revealed?'다시 눌러 단어 보기':'탭해서 뒤집기'}</small></button><div class="answer-row"><button class="soft danger" data-action="dontknow">아직 어려워요</button><button class="primary" data-action="know">알겠어요 ${icon('chev')}</button></div><p class="hint">모르는 단어만 모아 다시 보여드려요.</p>`;
}
function buildOptions(word, field) {
  const pool = modeDecks().flatMap(d=>d.words);
  const source = pool.length ? pool : (deck().words.length ? deck().words : quizWords());
  const correctVal = word[field];
  const distractors = [...new Set(source.filter(x=>x[field] && x[field]!==correctVal).map(x=>x[field]))].sort(()=>.5-Math.random()).slice(0,3);
  return [correctVal, ...distractors].sort(()=>.5-Math.random());
}
function todayStr() { return new Date().toISOString().slice(0, 10); }
function quizWords() {
  if (state.quizSource === 'mistakes') { const today = todayStr(); return state.mistakes.filter(w=>(w.next_review_date||today) <= today); }
  return deck().words;
}
function quizTypeTabs() {
  if (state.language !== '중국어') return [['choice','객관식'],['spell','뜻 입력'],['write','단어 쓰기'],['voice','말하기']];
  return [['choice','한자→한국어'],['spell','한자 입력'],['pinyin','한자→병음'],['hanzi-write','한자 쓰기',true],['ko-char','한국어→한자'],['voice','말하기']];
}
function quizConfig(type, word) {
  const meaningLabel = state.language === '중국어' ? '한자의 뜻은?' : `다음 ${state.language}의 뜻은?`;
  const configs = {
    choice: { field: 'back', prompt: word.front, label: meaningLabel },
    spell: { field: 'back', prompt: word.front, label: meaningLabel },
    write: { field: 'front', prompt: word.back, label: `한국어 뜻을 보고 ${state.language}로 입력하세요` },
    pinyin: { field: 'pinyin', prompt: word.front, label: '한자를 보고 병음을 입력하세요' },
    'ko-char': { field: 'front', prompt: word.back, label: '한국어 뜻에 맞는 한자를 고르세요' },
    voice: { field: 'front', prompt: word.back, label: `다음 뜻을 ${state.language}로 말해 보세요` }
  };
  return configs[type] || configs.choice;
}
function quiz() {
  const list = quizWords();
  if (!quizTypeTabs().some(([v])=>v===state.quizType)) state.quizType = quizTypeTabs()[0][0];
  if (!list.length) {
    return state.quizSource === 'mistakes'
      ? `${languagePill()}<div class="empty"><div>✓</div><h2>지금은 복습할 오답이 없어요</h2><p>복습 주기가 되면 다시 표시돼요.</p><button class="primary" data-action="quiz-deck-mode">단어장 퀴즈로 돌아가기</button></div>`
      : `${languagePill()}<div class="empty"><div>＋</div><h2>단어가 없어요</h2><p>단어장에 단어를 먼저 추가해 주세요.</p><button class="primary" data-screen="create">단어 추가하기</button></div>`;
  }
  const word = list[state.quizIndex % list.length];
  const type = state.quizType;
  const cfg = quizConfig(type, word);
  const expected = word[cfg.field];
  const forceChoice = type === 'choice' || type === 'ko-char';
  const a = state.answered;
  const revealLine = `${word.front}${word.pinyin?' ('+word.pinyin+')':''} · ${word.back}`;
  const body = a
    ? `<div class="quiz-card ${a.correct?'flash-correct':'flash-incorrect'}"><span class="card-label">${a.correct?'정답이에요! 🎉':'아쉬워요'}</span><strong>${escape(revealLine)}</strong>${a.correct?'':`<em>내가 답한 것: ${escape(a.value)}</em>`}<p class="hint">이 단어, 얼마나 잘 기억하고 있었나요?</p><div class="rate-row"><button class="rate-btn again" data-rate="0">다시</button><button class="rate-btn hard" data-rate="3">어려움</button><button class="rate-btn good" data-rate="4">보통</button><button class="rate-btn easy" data-rate="5">쉬움</button></div></div>`
    : `<div class="quiz-card"><span class="card-label">${cfg.label}</span><strong>${escape(cfg.prompt||'')}</strong>${
        forceChoice
          ? `<div class="choices">${buildOptions(word,cfg.field).map(o=>`<button data-answer="${escape(o)}">${escape(o)}</button>`).join('')}</div>`
          : type === 'voice'
            ? `<button class="voice-btn" data-action="voice">🎙 말하기 시작</button><p id="voice-result" class="hint"></p>`
            : `<form id="spell-form"><input autocomplete="off" placeholder="${cfg.field==='pinyin'?'성조까지 정확히 입력 (예: nǐ hǎo)':cfg.field==='front'?`${state.language}로 입력하세요`:'한국어 뜻을 입력하세요'}" /><button class="primary">확인</button></form>`
      }</div>`;
  return `${languagePill()}${state.quizSource==='mistakes'?'<p class="intro">오답 복습 퀴즈</p>':''}<div class="quiz-types">${quizTypeTabs().map(([v,label,disabled])=>`<button class="${type===v?'active':''} ${disabled?'disabled':''}" data-quiz="${v}" ${disabled?'data-disabled="1"':''}>${label}${disabled?' <small>준비 중</small>':''}</button>`).join('')}</div>${body}`;
}
function dueLabel(dateStr) {
  const today = todayStr();
  if (!dateStr || dateStr <= today) return '지금 복습 가능';
  const diff = Math.ceil((new Date(dateStr) - new Date(today)) / 86400000);
  return diff + '일 후 복습';
}
function mistakes() {
  const today = todayStr();
  const due = state.mistakes.filter(w => (w.next_review_date||today) <= today);
  if (!state.mistakes.length) return `${languagePill()}<p class="intro">틀린 단어를 모아 다시 익혀 보세요.</p><div class="empty"><div>✓</div><h2>아직 오답이 없어요</h2><p>퀴즈에서 틀린 단어가 이곳에 쌓입니다.</p><button class="primary" data-screen="quiz">퀴즈 시작하기</button></div>`;
  return `${languagePill()}<p class="intro">틀린 단어를 모아 다시 익혀 보세요.</p>${due.length?`<button class="primary" data-action="review-mistakes">오답 복습 퀴즈 시작 (${due.length}개)</button>`:`<p class="hint">지금은 복습할 단어가 없어요. 복습 주기가 되면 다시 표시돼요.</p>`}<div class="deck-list">${state.mistakes.map(w=>`<div class="mistake"><span>🔤</span><div><b>${escape(w.front)}</b><small>${escape(w.back)}${w.wrong_count?` · ${w.wrong_count}번 틀림`:''} · ${dueLabel(w.next_review_date)}</small></div><button data-action="delete-mistake" data-word="${w.id}">삭제</button></div>`).join('')}</div>`;
}
function create(){
  const chinese = state.language === '중국어';
  return `${languagePill()}<div class="create-head"><h2>새 단어장을 만들어 볼까요?</h2><p>직접 입력하거나 사진에서 단어를 찾아볼 수 있어요.</p></div><form id="create-form" class="create-form"><label>단어장 이름<input name="name" required placeholder="예: DELE A1" /></label><label>${chinese?'한자':state.language+' 단어'}<input name="front" required placeholder="${chinese?'예: 你好':'예: aprender'}" /></label>${chinese?'<label>병음<input name="pinyin" required placeholder="예: nǐ hǎo" /></label>':''}<label>한국어 뜻<input name="back" required placeholder="예: 배우다" /></label><label>다른 표현 <small>(선택, 쉼표로 구분)</small><input name="synonyms" placeholder="예: 학습하다" /></label><label>예문 <small>(선택)</small><input name="example" placeholder="예: Quiero aprender español." /></label><label>예문 뜻 <small>(선택)</small><input name="example_ko" placeholder="예: 스페인어를 배우고 싶어요." /></label><button class="primary" type="submit">단어장에 추가하기</button></form><div class="ocr-box"><b>📷 사진에서 단어 자동 추출</b><p>사진을 올리면 AI가 ${state.language} 단어와 한국어 뜻을 알아서 찾아드려요.</p><input id="image-input" type="file" accept="image/*" /><button class="soft" data-action="ocr">${state.ocrBusy?'분석 중…':'사진에서 찾기'}</button>${state.ocrCandidates.length?`<div class="ocr-results">${state.ocrCandidates.map((c,i)=>`<div class="ocr-item"><div><b>${escape(c.front)}</b><small>${escape(c.back)}${c.pinyin?' · '+escape(c.pinyin):''}</small></div><button data-action="add-ocr-word" data-index="${i}">추가</button></div>`).join('')}</div>`:''}</div>`;
}
function aiChat(){
  return `${languagePill()}<div class="ai-chat">${state.aiMessages.length?state.aiMessages.map(m=>`<div class="ai-msg ${m.role}">${escape(m.content)}</div>`).join(''):'<p class="hint">문법, 표현, 회화에 대해 무엇이든 물어보세요.</p>'}${state.aiBusy?'<div class="ai-msg assistant">생각 중…</div>':''}</div><form id="ai-form" class="ai-form"><input name="q" autocomplete="off" placeholder="예: gracias랑 muchas gracias 차이가 뭐야?" /><button class="primary" type="submit">보내기</button></form>`;
}
function buildLevelTestQuestions(language) {
  const levels = levelsFor(language);
  const byLevel = initialDecksByLevel[language] || {};
  const qs = [];
  levels.forEach(lvl => {
    const words = (byLevel[lvl] || []).flatMap(d => d.words);
    shuffleArr(words).slice(0, 2).forEach(w => qs.push({ level: lvl, word: w }));
  });
  return qs;
}
function levelTestOptions(word, language) {
  const pool = Object.values(initialDecksByLevel[language] || {}).flatMap(decks => decks.flatMap(d => d.words));
  const distractors = [...new Set(pool.filter(x => x.back !== word.back).map(x => x.back))].sort(() => .5 - Math.random()).slice(0, 3);
  return shuffleArr([word.back, ...distractors]);
}
function levelTestScreen() {
  const t = state.levelTest;
  if (!t) return '';
  if (t.index >= t.questions.length) {
    const levels = levelsFor(t.language);
    const recIdx = Math.min(levels.length - 1, Math.floor(t.correct / 2));
    const recommended = levels[recIdx];
    return `<div class="empty"><div>🎯</div><h2>레벨 테스트 완료!</h2><p>${t.correct} / ${t.questions.length}개 정답 · 추천 레벨: <b>${recommended}</b></p><button class="primary" data-action="apply-level-test" data-value="${recommended}">이 레벨로 시작하기</button><button class="soft" data-action="cancel-level-test">직접 선택할래요</button></div>`;
  }
  const q = t.questions[t.index];
  const word = q.word;
  const opts = levelTestOptions(word, t.language);
  return `<div class="quiz-card"><span class="card-label">${t.index+1} / ${t.questions.length} · ${q.level}</span><strong>${escape(word.front)}</strong><div class="choices">${opts.map(o=>`<button data-action="level-test-answer" data-answer="${escape(o)}">${escape(o)}</button>`).join('')}</div></div>`;
}
function onboarding(){
  const o = state.onboard;
  if (!o) return '';
  if (o.step === 0) return onboardChoiceStep('성별을 알려주시겠어요?', '원하지 않으면 건너뛰어도 돼요.', ['여성','남성','기타'], o.gender, 'onboard-gender', false);
  if (o.step === 1) return onboardChoiceStep('연령대를 알려주시겠어요?', '원하지 않으면 건너뛰어도 돼요.', ['10대','20대','30대','40대','50대 이상'], o.age, 'onboard-age', false);
  if (o.step === 2) return onboardChoiceStep('배우고 싶은 언어를 골라주세요', '여러 개 선택할 수 있어요.', ['스페인어','영어','중국어'], o.languages, 'onboard-language', true);
  return onboardGoals();
}
function onboardChoiceStep(title, hint, options, selected, action, multi){
  const isSel = v => multi ? (selected||[]).includes(v) : selected===v;
  return `<div class="create-head"><h2>${escape(title)}</h2><p>${escape(hint)}</p></div><div class="deck-list">${options.map(v=>`<button class="deck-row ${isSel(v)?'selected':''}" data-action="${action}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${isSel(v)?'<b>✓</b>':''}</button>`).join('')}</div><div class="onboard-actions"><button class="soft" data-action="onboard-skip">건너뛰기</button><button class="primary" data-action="onboard-next">다음 ${icon('chev')}</button></div>`;
}
function onboardGoals(){
  const o = state.onboard;
  const lang = o.languages[o.goalIndex] || o.languages[0];
  const level = o.levels[lang];
  const goals = o.goals[lang] || [];
  const levelOptions = levelsFor(lang);
  const goalOptions = ['여행','커리어','취미','친목'];
  return `<div class="create-head"><h2>${escape(lang)} 학습 정보</h2><p>현재 수준과 목표를 알려주세요. (${o.goalIndex+1}/${o.languages.length})</p></div><div class="section-title"><h2>현재 수준</h2><button data-action="start-level-test" data-lang="${lang}">🎯 레벨 테스트로 정하기</button></div><div class="deck-list">${levelOptions.map(v=>`<button class="deck-row ${level===v?'selected':''}" data-action="onboard-level" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${level===v?'<b>✓</b>':''}</button>`).join('')}</div><div class="section-title"><h2>목표 (여러 개 선택 가능)</h2></div><div class="deck-list">${goalOptions.map(v=>`<button class="deck-row ${goals.includes(v)?'selected':''}" data-action="onboard-goal" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${goals.includes(v)?'<b>✓</b>':''}</button>`).join('')}</div><div class="onboard-actions"><button class="primary" data-action="onboard-next">${o.goalIndex+1<o.languages.length?'다음 언어':'완료'} ${icon('chev')}</button></div>`;
}
function nav(){return state.user && state.screen!=='onboarding' && state.screen!=='nickname'?`<nav><button class="${state.screen==='home'?'active':''}" data-screen="home">${icon('home')}<span>홈</span></button><button class="${state.screen==='study'?'active':''}" data-screen="study">${icon('book')}<span>단어장</span></button><button class="${state.screen==='quiz'?'active':''}" data-screen="quiz">${icon('quiz')}<span>퀴즈</span></button><button class="${state.screen==='mistakes'?'active':''}" data-screen="mistakes">${icon('redo')}<span>오답</span></button></nav>`:'';}
function drawer(){
  const name = state.nickname || state.user?.email?.split('@')[0] || '';
  return `<div class="overlay ${state.drawer?'show':''}" data-action="drawer"></div><aside class="drawer ${state.drawer?'show':''}"><div class="brand"><div class="logo">P</div><b>PolyGo</b><button data-action="drawer">×</button></div><div class="profile"><span class="avatar">${escape(name.slice(0,1).toUpperCase()||'P')}</span><div><b>${escape(name)}</b><small>클라우드 동기화 사용 중</small></div></div><div class="drawer-links"><button data-action="account">${icon('user')} 회원 정보 ${icon('chev')}</button><button data-action="level-modal">🎯 학습 레벨 설정 ${icon('chev')}</button><button data-screen="ai">💬 AI에게 질문하기 ${icon('chev')}</button><button data-action="mode-modal">${icon('book')} 학습 모드 ${icon('chev')}</button><button data-action="settings">${icon('settings')} 설정 ${icon('chev')}</button></div><p>v0.4 · 계정에 안전하게 동기화됨</p></aside>`;
}
function modal(){
  if (!state.modal) return '';
  const body = state.modal === 'language'
    ? `<h2>학습 언어</h2>${['스페인어','영어','중국어'].map(l=>`<button class="choice-line ${state.language===l?'selected':''}" data-action="set-language" data-lang="${l}">${langFlag(l)} ${l} ${state.language===l?'<b>✓</b>':''}</button>`).join('')}`
    : state.modal === 'settings'
    ? `<h2>설정</h2><button class="choice-line" data-action="dark">${icon('sun')} 다크 모드 <span class="switch ${state.dark?'on':''}"></span></button><a class="choice-line" href="mailto:eunseosw0520@naver.com">✉ 관리자 문의</a>`
    : state.modal === 'level'
    ? `<h2>${escape(state.language)} 학습 레벨</h2><p class="modal-copy">레벨을 고르면 그 레벨에 맞는 새 단어장이 추가돼요. 다른 언어의 레벨을 바꾸려면 학습 언어를 먼저 바꾼 뒤 다시 열어주세요.</p><button class="choice-line" data-action="start-level-test">🎯 레벨 테스트로 정하기</button>${levelsFor(state.language).map(v=>`<button class="choice-line ${state.userLevels[state.language]===v?'selected':''}" data-action="set-level" data-value="${v}">${v} ${state.userLevels[state.language]===v?'<b>✓</b>':''}</button>`).join('')}`
    : state.modal === 'mode'
    ? `<h2>학습 모드</h2><p class="modal-copy">코스 학습은 레벨에 맞춰 준비된 단어장으로, 내 단어장은 직접 만든 단어장으로 학습해요.</p><button class="choice-line ${state.deckMode==='course'?'selected':''}" data-action="set-mode" data-value="course">📘 코스 학습 모드 ${state.deckMode==='course'?'<b>✓</b>':''}<small>레벨별 단어장으로 순서대로 학습</small></button><button class="choice-line ${state.deckMode==='custom'?'selected':''}" data-action="set-mode" data-value="custom">📓 내 단어장 모드 ${state.deckMode==='custom'?'<b>✓</b>':''}<small>내가 직접 만든 단어장으로 학습</small></button>`
    : (() => {
        const providers = (state.user?.identities||[]).map(i=>i.provider);
        const googleBtn = providers.includes('google')
          ? '<button class="choice-line disabled">구글 계정 연동 <small>연동됨</small></button>'
          : '<button class="choice-line" data-action="link-google">구글 계정 연동</button>';
        return `<h2>회원 정보</h2><p class="modal-copy">${escape(state.nickname||'')} · ${escape(state.user?.email||'')}</p><button class="choice-line" data-action="change-password">비밀번호 변경</button><button class="choice-line disabled">네이버 계정 연동 <small>준비 중</small></button><button class="choice-line disabled">카카오 계정 연동 <small>준비 중</small></button>${googleBtn}<button class="choice-line" data-action="logout">로그아웃</button><button class="choice-line" data-action="request-delete-account">회원 탈퇴</button>`;
      })();
  return `<div class="modal-wrap"><div class="modal-back" data-action="close-modal"></div><section class="modal"><button class="close" data-action="close-modal">×</button>${body}</section></div>`;
}
function bind() {
  document.querySelectorAll('[data-screen]').forEach(b=>b.onclick=()=>goto(b.dataset.screen));
  document.querySelectorAll('[data-deck]').forEach(b=>b.onclick=()=>{state.deckId=b.dataset.deck;goto('study')});
  document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>action(b.dataset.action,b));
  document.querySelectorAll('[data-quiz]').forEach(b=>b.onclick=()=>{if(b.dataset.disabled)return;state.quizType=b.dataset.quiz;state.answered=null;render()});
  document.querySelectorAll('[data-answer]:not([data-action])').forEach(b=>b.onclick=()=>answer(b.dataset.answer));
  document.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>rate(Number(b.dataset.rate)));
  const form=$('#create-form'); if(form) form.onsubmit=createDeck;
  const authForm=$('#auth-form'); if(authForm) authForm.onsubmit=authenticate;
  const nicknameForm=$('#nickname-form'); if(nicknameForm) nicknameForm.onsubmit=submitNickname;
  const spell=$('#spell-form'); if(spell) spell.onsubmit=e=>{e.preventDefault();answer(spell.querySelector('input').value.trim())};
  const aiForm=$('#ai-form'); if(aiForm) aiForm.onsubmit=askAI;
}
function goto(screen) {
  state.screen = screen; state.revealed = false; state.drawer = false;
  if (screen === 'study' && state.roundDeckId !== state.deckId) startRound();
  if (screen === 'quiz') { state.quizSource = 'deck'; state.quizIndex = 0; state.answered = null; }
  if (screen === 'create') state.ocrCandidates = [];
  render();
}
function startRound() {
  const d = deck();
  state.round = state.shuffle ? shuffleArr(d.words) : d.words.slice();
  state.roundIndex = 0; state.unknownIds = []; state.studyDone = false; state.revealed = false;
  state.roundDeckId = state.deckId;
}
async function action(a, el) {
  if (a === 'drawer') state.drawer = !state.drawer;
  else if (a === 'language') state.modal = 'language';
  else if (a === 'settings') state.modal = 'settings';
  else if (a === 'account') state.modal = 'account';
  else if (a === 'close-modal') state.modal = null;
  else if (a === 'auth-mode') state.authMode = state.authMode === 'login' ? 'signup' : 'login';
  else if (a === 'oauth-google') { await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } }); return; }
  else if (a === 'link-google') {
    const { error } = await supabase.auth.linkIdentity({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
    if (error) alert('연동에 실패했어요: ' + error.message);
    return;
  }
  else if (a === 'oauth-kakao') { await supabase.auth.signInWithOAuth({ provider: 'kakao', options: { redirectTo: location.origin + location.pathname } }); return; }
  else if (a === 'oauth-naver') { startNaverLogin(); return; }
  else if (a === 'set-language') {
    const lang = el.dataset.lang;
    state.modal = null;
    if (lang !== state.language) {
      state.language = lang;
      state.quizType = 'choice';
      await ensureLanguageSeed(lang);
      const langDecks = decks.filter(dk=>dk.language===lang && dk.source===state.deckMode);
      state.deckId = langDecks[0]?.id || null;
      state.screen = 'home';
    }
  }
  else if (a === 'level-modal') state.modal = 'level';
  else if (a === 'set-level') {
    const level = el.dataset.value;
    state.modal = null;
    await setUserLevel(state.language, level);
  }
  else if (a === 'mode-modal') state.modal = 'mode';
  else if (a === 'set-mode') {
    const mode = el.dataset.value;
    state.modal = null;
    if (mode !== state.deckMode) {
      state.deckMode = mode;
      localStorage.setItem('lingo-deck-mode', mode);
      state.deckId = modeDecks()[0]?.id || null;
      state.screen = 'home';
    }
  }
  else if (a === 'logout') { await supabase.auth.signOut(); state.user=null; decks=[]; state.mistakes=[]; state.nickname=''; state.drawer=false; state.modal=null; }
  else if (a === 'dark') { state.dark = !state.dark; localStorage.setItem('lingo-dark', state.dark); }
  else if (a === 'reveal') state.revealed = !state.revealed;
  else if (a === 'shuffle') { state.shuffle = !state.shuffle; startRound(); }
  else if (a === 'know' || a === 'dontknow') {
    const word = state.round[state.roundIndex];
    if (a === 'dontknow') state.unknownIds.push(word.id);
    state.roundIndex++; state.revealed = false;
    if (state.roundIndex >= state.round.length) {
      if (state.unknownIds.length === 0) state.studyDone = true;
      else { state.round = state.round.filter(w=>state.unknownIds.includes(w.id)); state.unknownIds=[]; state.roundIndex=0; }
    }
  }
  else if (a === 'restart-round') startRound();
  else if (a === 'share-deck') await shareDeck();
  else if (a === 'complete-deck') {
    const deckId = el.dataset.deck, name = el.dataset.name || '이';
    if (!confirm(`"${name}" 단어장 학습을 종료할까요? 홈 화면 목록에서 숨겨지고, "완료한 단어장"에서 다시 볼 수 있어요.`)) return;
    const r = await supabase.from('decks').update({ completed: true }).eq('id', deckId);
    if (r.error) { alert(r.error.message); return; }
    const target = decks.find(dk => dk.id === deckId);
    if (target) target.completed = true;
    goto('home');
    return;
  }
  else if (a === 'delete-deck') {
    const deckId = el.dataset.deck, name = el.dataset.name || '이';
    if (!confirm(`"${name}" 단어장을 삭제하시겠어요? 안에 있는 단어와 오답 기록도 함께 삭제돼요.`)) return;
    const target = decks.find(d => d.id === deckId);
    const wordIds = new Set((target?.words||[]).map(w=>w.id));
    const r = await supabase.from('decks').delete().eq('id', deckId);
    if (r.error) { alert(r.error.message); return; }
    decks = decks.filter(d => d.id !== deckId);
    state.mistakes = state.mistakes.filter(w => !wordIds.has(w.id));
    if (state.deckId === deckId) {
      const langDecks = decks.filter(d => d.language === state.language);
      state.deckId = langDecks[0]?.id || null;
    }
  }
  else if (a === 'voice') { await listenForAnswer(); return; }
  else if (a === 'ocr') { await readImage(); return; }
  else if (a === 'add-ocr-word') { await addOcrWord(Number(el.dataset.index)); return; }
  else if (a === 'onboard-gender') state.onboard.gender = el.dataset.value;
  else if (a === 'onboard-age') state.onboard.age = el.dataset.value;
  else if (a === 'onboard-language') {
    const v = el.dataset.value, langs = state.onboard.languages;
    state.onboard.languages = langs.includes(v) ? langs.filter(x=>x!==v) : [...langs, v];
  }
  else if (a === 'onboard-level') state.onboard.levels[el.dataset.lang] = el.dataset.value;
  else if (a === 'onboard-goal') {
    const lang = el.dataset.lang, v = el.dataset.value, cur = state.onboard.goals[lang] || [];
    state.onboard.goals[lang] = cur.includes(v) ? cur.filter(x=>x!==v) : [...cur, v];
  }
  else if (a === 'onboard-skip' || a === 'onboard-next') { await advanceOnboarding(); return; }
  else if (a === 'start-level-test') {
    const lang = el.dataset.lang || state.language;
    state.levelTest = { language: lang, questions: buildLevelTestQuestions(lang), index: 0, correct: 0 };
    state.modal = null;
    state.screen = 'level-test';
  }
  else if (a === 'level-test-answer') {
    const t = state.levelTest;
    const q = t.questions[t.index];
    if (el.dataset.answer === q.word.back) t.correct++;
    t.index++;
  }
  else if (a === 'apply-level-test') {
    const t = state.levelTest;
    const level = el.dataset.value;
    state.levelTest = null;
    if (state.onboard) {
      state.onboard.levels[t.language] = level;
      state.screen = 'onboarding';
    } else {
      await setUserLevel(t.language, level);
      state.screen = 'home';
    }
  }
  else if (a === 'cancel-level-test') {
    const wasOnboarding = !!state.onboard;
    state.levelTest = null;
    state.screen = wasOnboarding ? 'onboarding' : 'home';
  }
  else if (a === 'delete-mistake') { await supabase.from('mistakes').delete().eq('owner_id',state.user.id).eq('word_id',el.dataset.word); state.mistakes=state.mistakes.filter(w=>w.id!==el.dataset.word); }
  else if (a === 'review-mistakes') { state.quizSource='mistakes'; state.quizIndex=0; state.answered=null; state.screen='quiz'; state.drawer=false; }
  else if (a === 'quiz-deck-mode') { state.quizSource='deck'; state.quizIndex=0; state.answered=null; }
  else if (a === 'change-password') {
    const pw = prompt('새 비밀번호를 입력하세요 (8자 이상)');
    if (!pw) return;
    if (pw.length < 8) { alert('8자 이상 입력해 주세요.'); return; }
    const r = await supabase.auth.updateUser({ password: pw });
    if (r.error) { alert(r.error.message); return; }
    alert('비밀번호가 변경됐어요.');
    return;
  }
  else if (a === 'request-delete-account') {
    if (!confirm('정말 탈퇴하시겠어요? 내 단어장과 오답 기록이 모두 삭제됩니다.')) return;
    await supabase.from('mistakes').delete().eq('owner_id', state.user.id);
    const ids = decks.map(d=>d.id);
    if (ids.length) await supabase.from('decks').delete().in('id', ids);
    await supabase.auth.signOut();
    state.user=null; decks=[]; state.mistakes=[]; state.nickname=''; state.modal=null; state.drawer=false;
    alert('데이터가 삭제되고 로그아웃됐어요. 계정 완전 삭제는 관리자에게 문의해 주세요 (eunseosw0520@naver.com).');
    render();
    return;
  }
  render();
}
async function answer(value) {
  const list = quizWords();
  const word = list[state.quizIndex % list.length];
  const cfg = quizConfig(state.quizType, word);
  const expected = word[cfg.field];
  const accepted = [expected, ...(cfg.field==='back' ? (word.synonyms||'').split(',').map(s=>s.trim()).filter(Boolean) : [])];
  const cmp = cfg.field === 'pinyin' ? normalisePinyin : normalise;
  const correct = accepted.some(v => v && cmp(v) === cmp(value));
  state.answered = { correct, value };
  render();
}
async function rate(quality) {
  const list = quizWords();
  const word = list[state.quizIndex % list.length];
  await recordReview(word, quality);
  state.quizIndex++; state.answered = null;
  render();
}
async function recordReview(word, quality) {
  const existing = state.mistakes.find(x=>x.id===word.id);
  let ease = existing?.ease_factor ?? 2.5;
  let reps = existing?.repetition_count ?? 0;
  let interval = existing?.interval_days ?? 0;
  if (quality < 3) {
    reps = 0;
    interval = 1;
  } else {
    if (reps === 0) interval = 1;
    else if (reps === 1) interval = 6;
    else interval = Math.round(interval * ease);
    reps += 1;
  }
  ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  const due = new Date(); due.setDate(due.getDate() + interval);
  const wrong_count = quality < 3 ? (existing?.wrong_count || 0) + 1 : (existing?.wrong_count || 0);
  const payload = {
    owner_id: state.user.id, word_id: word.id,
    ease_factor: ease, interval_days: interval, repetition_count: reps,
    next_review_date: due.toISOString().slice(0, 10),
    wrong_count, next_review_at: new Date().toISOString()
  };
  await supabase.from('mistakes').upsert(payload, { onConflict: 'owner_id,word_id' });
  if (existing) Object.assign(existing, payload);
  else state.mistakes.push({ ...word, ...payload });
}
async function authenticate(e) {
  e.preventDefault();
  const f = new FormData(e.target), email = f.get('email').trim(), password = f.get('password');
  if (state.authMode === 'signup') {
    if (password !== f.get('passwordConfirm')) return alert('비밀번호가 일치하지 않아요.');
    const result = await supabase.auth.signUp({ email, password });
    if (result.error) return alert(result.error.message);
    if (!result.data.session) return alert('가입 확인 메일을 보냈어요. 메일의 링크를 누른 뒤 로그인해 주세요.');
    state.user = result.data.user;
    await loadCloudData(false);
    state.screen = 'nickname';
    render();
    return;
  }
  const result = await supabase.auth.signInWithPassword({ email, password });
  if (result.error) return alert(result.error.message);
  state.user = result.data.user;
  await loadCloudData();
  if (state.pendingShare) await claimSharedDeck(state.pendingShare);
  render();
}
async function submitNickname(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const nickname = f.get('nickname').trim();
  if (!nickname) return alert('닉네임을 입력해 주세요.');
  state.nickname = nickname;
  await supabase.from('profiles').upsert({ id: state.user.id, nickname });
  state.onboard = { step: 0, gender: null, age: null, languages: [], goalIndex: 0, levels: {}, goals: {} };
  state.screen = 'onboarding';
  render();
}
async function advanceOnboarding() {
  const o = state.onboard;
  if (o.step < 2) { o.step++; render(); return; }
  if (o.step === 2) {
    if (!o.languages.length) o.languages = [state.language];
    o.step = 3; o.goalIndex = 0; render(); return;
  }
  if (o.goalIndex + 1 < o.languages.length) { o.goalIndex++; render(); return; }
  await finishOnboarding();
}
async function finishOnboarding() {
  const o = state.onboard;
  await supabase.from('profiles').update({ gender: o.gender, age_range: o.age }).eq('id', state.user.id);
  const langs = o.languages.length ? o.languages : [state.language];
  for (const lang of langs) {
    const level = o.levels[lang] || levelsFor(lang)[0];
    await supabase.from('user_languages').upsert({ user_id: state.user.id, language: lang, level, goals: (o.goals[lang]||[]).join(',') }, { onConflict: 'user_id,language' });
    state.userLevels[lang] = level;
    await ensureLanguageSeed(lang, level);
  }
  state.language = langs[0];
  const langDecks = modeDecks();
  state.deckId = langDecks[0]?.id || null;
  state.onboard = null;
  goto('home');
}
async function ensureLanguageSeed(language, level) {
  if (decks.some(d => d.language === language)) return;
  const lvl = level || state.userLevels[language] || levelsFor(language)[0];
  const byLevel = initialDecksByLevel[language] || {};
  const samples = byLevel[lvl] || byLevel[levelsFor(language)[0]] || [];
  if (!samples.length) return;
  for (const sample of samples) {
    const { data: d } = await supabase.from('decks').insert({ owner_id: state.user.id, name: sample.name, icon: sample.icon, language, source: 'course' }).select().single();
    await supabase.from('words').insert(sample.words.map(w => ({ front: w.front, back: w.back, example: w.example||'', example_ko: w.example_ko||'', synonyms: w.synonyms||'', pinyin: w.pinyin||'', deck_id: d.id })));
  }
  const { data } = await supabase.from('decks').select('id,name,icon,language,share_token,completed,source,words(id,front,back,example,example_ko,synonyms,pinyin)').order('created_at');
  decks = data || [];
}
async function setUserLevel(language, level) {
  await supabase.from('user_languages').upsert({ user_id: state.user.id, language, level }, { onConflict: 'user_id,language' });
  state.userLevels[language] = level;
  await addLevelDeck(language, level);
}
async function addLevelDeck(language, level) {
  const byLevel = initialDecksByLevel[language] || {};
  const samples = byLevel[level] || [];
  if (!samples.length) return;
  const existingNames = new Set(decks.filter(d => d.language === language).map(d => d.name));
  const toAdd = samples.filter(s => !existingNames.has(s.name));
  if (!toAdd.length) { alert('이미 이 레벨의 단어장이 있어요.'); return; }
  for (const sample of toAdd) {
    const { data: d } = await supabase.from('decks').insert({ owner_id: state.user.id, name: sample.name, icon: sample.icon, language, source: 'course' }).select().single();
    await supabase.from('words').insert(sample.words.map(w => ({ front: w.front, back: w.back, example: w.example||'', example_ko: w.example_ko||'', synonyms: w.synonyms||'', pinyin: w.pinyin||'', deck_id: d.id })));
  }
  const { data } = await supabase.from('decks').select('id,name,icon,language,share_token,completed,source,words(id,front,back,example,example_ko,synonyms,pinyin)').order('created_at');
  decks = data || [];
  alert('새 단어장이 추가됐어요!');
}
async function loadCloudData(seed) {
  const { data: p } = await supabase.from('profiles').select('nickname').eq('id', state.user.id).single();
  state.nickname = p?.nickname || '';
  const { data: uls } = await supabase.from('user_languages').select('language,level').eq('user_id', state.user.id);
  state.userLevels = {}; (uls||[]).forEach(u => { state.userLevels[u.language] = u.level || levelsFor(u.language)[0]; });
  const { data, error } = await supabase.from('decks').select('id,name,icon,language,share_token,completed,source,words(id,front,back,example,example_ko,synonyms,pinyin)').order('created_at');
  if (error) return alert('단어장을 불러오지 못했어요: ' + error.message);
  decks = data || [];
  if (seed !== false) await ensureLanguageSeed(state.language);
  const langDecks = modeDecks();
  state.deckId = langDecks[0]?.id || decks[0]?.id || null;
  const { data: m } = await supabase.from('mistakes').select('word_id,wrong_count,next_review_at,ease_factor,interval_days,repetition_count,next_review_date,words(id,front,back,example,example_ko,synonyms,pinyin)').eq('owner_id', state.user.id);
  state.mistakes = (m||[]).map(x => x.words ? { ...x.words, wrong_count: x.wrong_count, next_review_at: x.next_review_at, ease_factor: x.ease_factor, interval_days: x.interval_days, repetition_count: x.repetition_count, next_review_date: x.next_review_date } : null).filter(Boolean);
}
async function createDeck(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = f.get('name').trim(), front = f.get('front').trim(), back = f.get('back').trim(), example = (f.get('example')||'').trim(), example_ko = (f.get('example_ko')||'').trim(), synonyms = (f.get('synonyms')||'').trim(), pinyin = (f.get('pinyin')||'').trim();
  let d = decks.find(x=>x.name===name && x.language===state.language);
  if (!d) {
    const r = await supabase.from('decks').insert({ owner_id: state.user.id, name, icon: '📚', language: state.language, source: 'custom' }).select().single();
    if (r.error) return alert(r.error.message);
    d = { ...r.data, words: [] };
    decks.push(d);
  }
  const r = await supabase.from('words').insert({ deck_id: d.id, front, back, example, example_ko, synonyms, pinyin }).select().single();
  if (r.error) return alert(r.error.message);
  d.words.push(r.data);
  state.deckId = d.id;
  goto('study');
}
async function shareDeck() {
  const d = deck();
  let token = d.share_token;
  if (!token) {
    token = crypto.randomUUID();
    const r = await supabase.from('decks').update({ share_token: token }).eq('id', d.id);
    if (r.error) return alert('공유 링크 생성에 실패했어요: ' + r.error.message);
    d.share_token = token;
  }
  const link = location.origin + location.pathname + '?share=' + token;
  try { await navigator.clipboard.writeText(link); alert('공유 링크를 복사했어요!\n' + link); }
  catch { alert('공유 링크: ' + link); }
}
async function claimSharedDeck(token) {
  const { data: d, error } = await supabase.from('decks').select('id,name,icon,language,words(front,back,example,example_ko,synonyms,pinyin)').eq('share_token', token).single();
  state.pendingShare = null;
  history.replaceState(null, '', location.pathname);
  if (error || !d) return alert('공유 링크를 찾을 수 없어요.');
  const r = await supabase.from('decks').insert({ owner_id: state.user.id, name: d.name + ' (공유됨)', icon: d.icon, language: d.language, source: 'custom' }).select().single();
  if (r.error) return alert('단어장 복사에 실패했어요: ' + r.error.message);
  if (d.words?.length) await supabase.from('words').insert(d.words.map(w => ({ deck_id: r.data.id, front: w.front, back: w.back, example: w.example, example_ko: w.example_ko, synonyms: w.synonyms, pinyin: w.pinyin })));
  await loadCloudData();
  alert('"' + d.name + '" 단어장을 내 계정에 추가했어요!');
}
function fileToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
async function readImage(){
  const input=$('#image-input');
  if(!input?.files?.[0]) return alert('먼저 사진을 선택해 주세요.');
  state.ocrBusy = true;
  render();
  try{
    const file = input.files[0];
    const image = await fileToBase64(file);
    const { data, error } = await supabase.functions.invoke('extract-words', { body: { image, mimeType: file.type, language: state.language } });
    if (error) throw new Error(error.message || 'AI 서버 호출에 실패했어요.');
    if (data?.error) throw new Error(data.error);
    state.ocrCandidates = data?.words || [];
    if (!state.ocrCandidates.length) alert('사진에서 단어를 찾지 못했어요. 더 선명한 사진으로 시도해 주세요.');
  }catch(err){ alert('사진 분석에 실패했어요: '+err.message); }
  finally{ state.ocrBusy = false; render(); }
}
async function addOcrWord(index){
  const candidate = state.ocrCandidates[index];
  if (!candidate) return;
  const d = deck();
  if (!d.id) return alert('먼저 단어장을 하나 만들어 주세요.');
  const r = await supabase.from('words').insert({ deck_id: d.id, front: candidate.front, back: candidate.back, example: candidate.example||'', example_ko: candidate.example_ko||'', synonyms: candidate.synonyms||'', pinyin: candidate.pinyin||'' }).select().single();
  if (r.error) return alert(r.error.message);
  d.words.push(r.data);
  state.ocrCandidates = state.ocrCandidates.filter((_, i) => i !== index);
  render();
}
async function askAI(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const q = (f.get('q')||'').trim();
  if (!q) return;
  state.aiMessages.push({ role: 'user', content: q });
  state.aiBusy = true;
  render();
  const { data, error } = await supabase.functions.invoke('ask-ai', { body: { messages: state.aiMessages.map(m=>({role:m.role,content:m.content})), language: state.language } });
  state.aiBusy = false;
  if (error || data?.error) state.aiMessages.push({ role: 'assistant', content: '죄송해요, 답변을 가져오지 못했어요: ' + (data?.error || error?.message || '알 수 없는 오류') });
  else state.aiMessages.push({ role: 'assistant', content: data.reply || '' });
  render();
}
let recognizing = false;
async function listenForAnswer() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const result = $('#voice-result');
  if (!Recognition) { const msg='이 브라우저는 음성 인식을 지원하지 않아요. Safari 최신 버전 또는 Chrome에서 시도해 주세요.'; if(result) result.textContent=msg; else alert(msg); return; }
  if (recognizing) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(t => t.stop());
  } catch { if(result) result.textContent='마이크 권한이 필요해요. 브라우저 설정에서 허용해 주세요.'; return; }
  const r = new Recognition();
  r.lang = state.language==='영어' ? 'en-US' : state.language==='중국어' ? 'zh-CN' : 'es-ES';
  r.interimResults = false;
  recognizing = true;
  r.onresult = e => { const said = e.results[0][0].transcript; if(result) result.textContent='인식한 답: '+said; answer(said); };
  r.onerror = e => {
    const detail = e.error==='not-allowed' ? ' (마이크 권한이 거부됐어요. 아이폰 설정 > Safari > 마이크에서 허용해 주세요.)' : e.error==='no-speech' ? ' (음성이 감지되지 않았어요. 다시 시도해 주세요.)' : e.error==='aborted' ? ' (인식이 중단됐어요. 다시 눌러서 시도해 주세요.)' : e.error==='network' ? ' (네트워크 문제로 인식하지 못했어요.)' : '';
    const msg = '음성 인식 오류: ' + (e.error||'알수없음') + detail;
    if (result) result.textContent = msg; else alert(msg);
  };
  r.onend = () => { recognizing = false; };
  r.start();
}
async function handleSignedInUser(newUser) {
  state.user = newUser;
  await loadCloudData(false);
  if (!state.nickname) {
    state.screen = 'nickname';
  } else {
    await ensureLanguageSeed(state.language);
    const langDecks = modeDecks();
    state.deckId = langDecks[0]?.id || decks[0]?.id || null;
  }
  if (state.pendingShare) await claimSharedDeck(state.pendingShare);
}
function startNaverLogin() {
  if (!NAVER_CLIENT_ID || NAVER_CLIENT_ID.startsWith('YOUR_')) { alert('네이버 로그인이 아직 설정되지 않았어요.'); return; }
  const oauthState = crypto.randomUUID();
  sessionStorage.setItem('naver-oauth-state', oauthState);
  const redirectUri = SUPABASE_URL + '/functions/v1/naver-oauth';
  const authorizeUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${encodeURIComponent(NAVER_CLIENT_ID)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${encodeURIComponent(oauthState)}`;
  location.href = authorizeUrl;
}
async function completeNaverLogin(params) {
  const token = params.get('naver_token'), email = params.get('naver_email');
  if (!token || !email) return false;
  const savedState = sessionStorage.getItem('naver-oauth-state');
  sessionStorage.removeItem('naver-oauth-state');
  const returnedState = params.get('naver_state');
  history.replaceState(null, '', location.pathname);
  if (returnedState && savedState && returnedState !== savedState) { alert('네이버 로그인 검증에 실패했어요. 다시 시도해 주세요.'); return false; }
  const { data, error } = await supabase.auth.verifyOtp({ email, token_hash: token, type: 'email' });
  if (error) { alert('네이버 로그인에 실패했어요: ' + error.message); return false; }
  if (data.session) await handleSignedInUser(data.session.user);
  return true;
}
async function init() {
  if (location.search.includes('debugFake=1')) {
    state.user = { id: 'fake-user', email: 'fake@test.com', identities: [{provider:'email'}] };
    state.nickname = '테스터';
    decks = [];
    state.deckId = null; state.language = '스페인어'; state.deckMode='course';
    state.userLevels = {};
    state.screen = 'home';
    window.__debugState = state;
    render();
    return;
  }
  if (!configured) { render(); return; }
  const params = new URLSearchParams(location.search);
  const shareToken = params.get('share');
  if (shareToken) state.pendingShare = shareToken;
  const authError = params.get('auth_error');
  if (authError) { alert('로그인에 실패했어요: ' + decodeURIComponent(authError)); history.replaceState(null, '', location.pathname); }
  const naverHandled = await completeNaverLogin(params);
  if (!naverHandled) {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) await handleSignedInUser(session.user);
  }
  supabase.auth.onAuthStateChange(async (_event, session) => {
    const newUser = session?.user || null;
    if (newUser && newUser.id !== state.user?.id) {
      await handleSignedInUser(newUser);
      render();
    } else if (!newUser && state.user) {
      state.user = null;
      render();
    }
  });
  render();
}
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
init();
