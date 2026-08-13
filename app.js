import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './config.js';

const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_');
const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
const GREETINGS = { '스페인어': '¡Hola', '영어': 'Hello', '중국어': '你好' };
const LEVELS = ['입문','초급','초중급','중급','중고급','고급'];
const initialDecksByLevel = {
  '스페인어': {
    '입문': [
      { name: '스페인어 입문 (1~47)', icon: '🌱', words: [
        { front: 'maría', back: '마리아(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'pablo', back: '파블로(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'jugo', back: '주스', example: '', example_ko: '', synonyms: '' },
        { front: 'bienvenido', back: '환영합니다', example: '', example_ko: '', synonyms: '' },
        { front: 'buenos días', back: '좋은 아침', example: '', example_ko: '', synonyms: '' },
        { front: 'yo soy', back: '나는 ~이다', example: '', example_ko: '', synonyms: '' },
        { front: 'luis', back: '루이스(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'mucho gusto', back: '만나서 반갑습니다', example: '', example_ko: '', synonyms: '' },
        { front: 'él es', back: '그는 ~이다', example: '', example_ko: '', synonyms: '' },
        { front: 'mi mejor amigo', back: '나의 가장 친한 친구', example: '', example_ko: '', synonyms: '' },
        { front: 'bien', back: '잘, 좋게', example: '', example_ko: '', synonyms: '' },
        { front: 'qué', back: '무엇', example: '', example_ko: '', synonyms: '' },
        { front: 'hasta luego', back: '또 봐요', example: '', example_ko: '', synonyms: '' },
        { front: 'ana', back: '아나(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'ella', back: '그녀', example: '', example_ko: '', synonyms: '' },
        { front: 'alemania', back: '독일 (원문 오타 "almenia" 수정함)', example: '', example_ko: '', synonyms: '' },
        { front: 'méxico', back: '멕시코', example: '', example_ko: '', synonyms: '' },
        { front: 'buenas tardes', back: '안녕하세요(오후 인사)', example: '', example_ko: '', synonyms: '' },
        { front: 'de dónde eres', back: '어디에서 왔어?', example: '', example_ko: '', synonyms: '' },
        { front: 'encantado', back: '만나서 반갑습니다(남성형)', example: '', example_ko: '', synonyms: '' },
        { front: 'francia', back: '프랑스', example: '', example_ko: '', synonyms: '' },
        { front: 'sí', back: '네', example: '', example_ko: '', synonyms: '' },
        { front: 'tú', back: '너', example: '', example_ko: '', synonyms: '' },
        { front: 'verdad', back: '사실, ~그렇지?(부가의문)', example: '', example_ko: '', synonyms: '' },
        { front: 'mamá', back: '엄마', example: '', example_ko: '', synonyms: '' },
        { front: 'no', back: '아니요', example: '', example_ko: '', synonyms: '' },
        { front: 'diego', back: '디에고(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'mi', back: '나의', example: '', example_ko: '', synonyms: '' },
        { front: 'compañero de cuarto', back: '룸메이트', example: '', example_ko: '', synonyms: '' },
        { front: 'uno', back: '하나(숫자 1)', example: '', example_ko: '', synonyms: '' },
        { front: 'tengo', back: '나는 가지고 있다', example: '', example_ko: '', synonyms: '' },
        { front: 'quiere', back: '그/그녀는 원한다', example: '', example_ko: '', synonyms: '' },
        { front: 'hermano', back: '형제(형/오빠/남동생)', example: '', example_ko: '', synonyms: '' },
        { front: 'hermana', back: '자매(언니/누나/여동생)', example: '', example_ko: '', synonyms: '' },
        { front: 'hijo', back: '아들', example: '', example_ko: '', synonyms: '' },
        { front: 'hija', back: '딸', example: '', example_ko: '', synonyms: '' },
        { front: 'en realidad', back: '사실은', example: '', example_ko: '', synonyms: '' },
        { front: 'solamente', back: '오직', example: '', example_ko: '', synonyms: '' },
        { front: 'una', back: '하나(여성형)', example: '', example_ko: '', synonyms: '' },
        { front: 'pedro', back: '페드로(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'tío', back: '삼촌', example: '', example_ko: '', synonyms: '' },
        { front: 'tía', back: '이모/고모', example: '', example_ko: '', synonyms: '' },
        { front: 'amigo', back: '친구', example: '', example_ko: '', synonyms: '' },
        { front: 'compañero de trabajo', back: '직장 동료', example: '', example_ko: '', synonyms: '' },
        { front: 'laura', back: '라우라(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'también', back: '또한', example: '', example_ko: '', synonyms: '' },
        { front: 'esposo', back: '남편', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '초급': [
      { name: '스페인어 초급 (48~94)', icon: '🌿', words: [
        { front: 'abuelo', back: '할아버지', example: '', example_ko: '', synonyms: '' },
        { front: 'abuela', back: '할머니', example: '', example_ko: '', synonyms: '' },
        { front: 'como yo', back: '나처럼', example: '', example_ko: '', synonyms: '' },
        { front: 'tímido', back: '수줍은', example: '', example_ko: '', synonyms: '' },
        { front: 'no crees', back: '그렇게 생각 안 해?', example: '', example_ko: '', synonyms: '' },
        { front: 'simpático', back: '친절한, 호감 가는', example: '', example_ko: '', synonyms: '' },
        { front: 'creo que', back: '나는 ~라고 생각해', example: '', example_ko: '', synonyms: '' },
        { front: 'novio', back: '남자친구', example: '', example_ko: '', synonyms: '' },
        { front: 'novia', back: '여자친구', example: '', example_ko: '', synonyms: '' },
        { front: 'cómo es tu', back: '너의 ~는 어때?', example: '', example_ko: '', synonyms: '' },
        { front: 'gracioso', back: '재미있는, 웃긴', example: '', example_ko: '', synonyms: '' },
        { front: 'papá', back: '아빠', example: '', example_ko: '', synonyms: '' },
        { front: 'serio', back: '진지한', example: '', example_ko: '', synonyms: '' },
        { front: 'pero', back: '하지만', example: '', example_ko: '', synonyms: '' },
        { front: 'maleta', back: '여행가방', example: '', example_ko: '', synonyms: '' },
        { front: 'pasaporte', back: '여권', example: '', example_ko: '', synonyms: '' },
        { front: 'tranquilo', back: '차분한', example: '', example_ko: '', synonyms: '' },
        { front: 'tengo', back: '나는 가지고 있다', example: '', example_ko: '', synonyms: '' },
        { front: 'está aquí', back: '여기 있다', example: '', example_ko: '', synonyms: '' },
        { front: 'cartera', back: '지갑', example: '', example_ko: '', synonyms: '' },
        { front: 'vestido', back: '드레스', example: '', example_ko: '', synonyms: '' },
        { front: 'suéter', back: '스웨터', example: '', example_ko: '', synonyms: '' },
        { front: 'chaqueta', back: '재킷', example: '', example_ko: '', synonyms: '' },
        { front: 'dónde', back: '어디', example: '', example_ko: '', synonyms: '' },
        { front: 'reloj', back: '시계', example: '', example_ko: '', synonyms: '' },
        { front: 'gorra', back: '모자', example: '', example_ko: '', synonyms: '' },
        { front: 'cargador', back: '충전기', example: '', example_ko: '', synonyms: '' },
        { front: 'ay', back: '아이고!(감탄사)', example: '', example_ko: '', synonyms: '' },
        { front: 'nuevo', back: '새로운', example: '', example_ko: '', synonyms: '' },
        { front: 'no encuentro', back: '못 찾겠어', example: '', example_ko: '', synonyms: '' },
        { front: 'mochila', back: '백팩', example: '', example_ko: '', synonyms: '' },
        { front: 'dónde está ~', back: '는 어디에 있어?', example: '', example_ko: '', synonyms: '' },
        { front: 'libro', back: '책', example: '', example_ko: '', synonyms: '' },
        { front: 'tableta', back: '태블릿', example: '', example_ko: '', synonyms: '' },
        { front: 'pues', back: '음..., 그러니까', example: '', example_ko: '', synonyms: '' },
        { front: 'no', back: '아니요', example: '', example_ko: '', synonyms: '' },
        { front: 'lucía', back: '루시아(이름)', example: '', example_ko: '', synonyms: '' },
        { front: 'panadería', back: '빵집', example: '', example_ko: '', synonyms: '' },
        { front: 'hay ~', back: '이 있다', example: '', example_ko: '', synonyms: '' },
        { front: 'cafetería', back: '카페', example: '', example_ko: '', synonyms: '' },
        { front: 'por aquí', back: '이쪽으로', example: '', example_ko: '', synonyms: '' },
        { front: 'tienda', back: '가게', example: '', example_ko: '', synonyms: '' },
        { front: 'teatro', back: '극장', example: '', example_ko: '', synonyms: '' },
        { front: 'banco', back: '은행', example: '', example_ko: '', synonyms: '' },
        { front: 'museo', back: '박물관', example: '', example_ko: '', synonyms: '' },
        { front: 'cerca', back: '가까운', example: '', example_ko: '', synonyms: '' },
        { front: 'estación de metro', back: '지하철역', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '초중급': [
      { name: '스페인어 초중급 (95~141)', icon: '🍀', words: [
        { front: 'centro comercial', back: '쇼핑몰', example: '', example_ko: '', synonyms: '' },
        { front: 'parque', back: '공원', example: '', example_ko: '', synonyms: '' },
        { front: 'oye', back: '저기, 있잖아', example: '', example_ko: '', synonyms: '' },
        { front: 'en ~', back: '에서', example: '', example_ko: '', synonyms: '' },
        { front: 'barrio', back: '동네', example: '', example_ko: '', synonyms: '' },
        { front: 'ciudad', back: '도시', example: '', example_ko: '', synonyms: '' },
        { front: 'librería', back: '서점', example: '', example_ko: '', synonyms: '' },
        { front: 'hotel', back: '호텔', example: '', example_ko: '', synonyms: '' },
        { front: 'no hay', back: '없다', example: '', example_ko: '', synonyms: '' },
        { front: 'mira', back: '봐', example: '', example_ko: '', synonyms: '' },
        { front: 'pueblo', back: '마을', example: '', example_ko: '', synonyms: '' },
        { front: 'estacionamiento', back: '주차장', example: '', example_ko: '', synonyms: '' },
        { front: 'español', back: '스페인어', example: '', example_ko: '', synonyms: '' },
        { front: 'portugués', back: '포르투갈어', example: '', example_ko: '', synonyms: '' },
        { front: 'y tú', back: '너는?', example: '', example_ko: '', synonyms: '' },
        { front: 'escuela', back: '학교', example: '', example_ko: '', synonyms: '' },
        { front: 'estudio', back: '나는 공부한다', example: '', example_ko: '', synonyms: '' },
        { front: 'estudias', back: '너는 공부한다', example: '', example_ko: '', synonyms: '' },
        { front: 'inglés', back: '영어', example: '', example_ko: '', synonyms: '' },
        { front: 'francés', back: '프랑스어', example: '', example_ko: '', synonyms: '' },
        { front: 'genial', back: '멋지다, 좋다', example: '', example_ko: '', synonyms: '' },
        { front: 'hablo', back: '나는 말한다', example: '', example_ko: '', synonyms: '' },
        { front: 'hablas', back: '너는 말한다', example: '', example_ko: '', synonyms: '' },
        { front: 'un poco de', back: '약간의', example: '', example_ko: '', synonyms: '' },
        { front: 'muy bien', back: '아주 잘', example: '', example_ko: '', synonyms: '' },
        { front: 'italiano', back: '이탈리아어', example: '', example_ko: '', synonyms: '' },
        { front: 'alemán', back: '독일어', example: '', example_ko: '', synonyms: '' },
        { front: 'guau', back: '와(감탄사)', example: '', example_ko: '', synonyms: '' },
        { front: 'por la mañana', back: '아침에', example: '', example_ko: '', synonyms: '' },
        { front: 'casa', back: '집', example: '', example_ko: '', synonyms: '' },
        { front: 'música', back: '음악', example: '', example_ko: '', synonyms: '' },
        { front: 'arte', back: '예술', example: '', example_ko: '', synonyms: '' },
        { front: 'por la noche', back: '밤에', example: '', example_ko: '', synonyms: '' },
        { front: 'frío', back: '추운, 추위', example: '', example_ko: '', synonyms: '' },
        { front: 'abrigo', back: '외투', example: '', example_ko: '', synonyms: '' },
        { front: 'uso', back: '나는 사용한다', example: '', example_ko: '', synonyms: '' },
        { front: 'en ~', back: '에', example: '', example_ko: '', synonyms: '' },
        { front: 'otoño', back: '가을', example: '', example_ko: '', synonyms: '' },
        { front: 'hace (', back: '날씨가) ~하다', example: '', example_ko: '', synonyms: '' },
        { front: 'viento', back: '바람', example: '', example_ko: '', synonyms: '' },
        { front: 'calor', back: '더위', example: '', example_ko: '', synonyms: '' },
        { front: 'verano', back: '여름', example: '', example_ko: '', synonyms: '' },
        { front: 'enero 1', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'ahora', back: '지금', example: '', example_ko: '', synonyms: '' },
        { front: 'julio 7', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'traje de baño', back: '수영복', example: '', example_ko: '', synonyms: '' },
        { front: 'hoy', back: '오늘', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '중급': [
      { name: '스페인어 중급 (142~188)', icon: '🌳', words: [
        { front: 'marzo 3', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'país', back: '나라', example: '', example_ko: '', synonyms: '' },
        { front: 'septiembre 9', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'primavera', back: '봄', example: '', example_ko: '', synonyms: '' },
        { front: 'invierno', back: '겨울', example: '', example_ko: '', synonyms: '' },
        { front: 'buen tiempo', back: '좋은 날씨', example: '', example_ko: '', synonyms: '' },
        { front: 'mucho', back: '많이', example: '', example_ko: '', synonyms: '' },
        { front: 'allí', back: '저기', example: '', example_ko: '', synonyms: '' },
        { front: 'octubre 10', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'diciembre 12', back: '월', example: '', example_ko: '', synonyms: '' },
        { front: 'sol', back: '태양', example: '', example_ko: '', synonyms: '' },
        { front: 'piña', back: '파인애플', example: '', example_ko: '', synonyms: '' },
        { front: 'sandía', back: '수박', example: '', example_ko: '', synonyms: '' },
        { front: 'bolsa', back: '봉지, 가방', example: '', example_ko: '', synonyms: '' },
        { front: 'mercado', back: '시장', example: '', example_ko: '', synonyms: '' },
        { front: 'necesito', back: '나는 필요하다', example: '', example_ko: '', synonyms: '' },
        { front: 'necesitas', back: '너는 필요하다', example: '', example_ko: '', synonyms: '' },
        { front: 'durazno', back: '복숭아', example: '', example_ko: '', synonyms: '' },
        { front: 'cuánto cuesta', back: '얼마예요(단수)', example: '', example_ko: '', synonyms: '' },
        { front: 'cuánto cuestan', back: '얼마예요(복수)', example: '', example_ko: '', synonyms: '' },
        { front: 'dos', back: '둘', example: '', example_ko: '', synonyms: '' },
        { front: 'más', back: '더', example: '', example_ko: '', synonyms: '' },
        { front: 'botella de ~', back: '한 병', example: '', example_ko: '', synonyms: '' },
        { front: 'mango', back: '망고', example: '', example_ko: '', synonyms: '' },
        { front: 'naranja', back: '오렌지', example: '', example_ko: '', synonyms: '' },
        { front: 'tres', back: '셋', example: '', example_ko: '', synonyms: '' },
        { front: 'kilo', back: '킬로(그램)', example: '', example_ko: '', synonyms: '' },
        { front: 'este', back: '이것', example: '', example_ko: '', synonyms: '' },
        { front: 'edificio', back: '건물', example: '', example_ko: '', synonyms: '' },
        { front: 'vivo', back: '나는 산다', example: '', example_ko: '', synonyms: '' },
        { front: 'apartamento', back: '아파트', example: '', example_ko: '', synonyms: '' },
        { front: 'lejos', back: '먼', example: '', example_ko: '', synonyms: '' },
        { front: 'pequeño', back: '작은', example: '', example_ko: '', synonyms: '' },
        { front: 'piso', back: '층, 집(스페인식 아파트)', example: '', example_ko: '', synonyms: '' },
        { front: 'perro', back: '개', example: '', example_ko: '', synonyms: '' },
        { front: 'gato', back: '고양이', example: '', example_ko: '', synonyms: '' },
        { front: 'familia', back: '가족', example: '', example_ko: '', synonyms: '' },
        { front: 'solo', back: '혼자', example: '', example_ko: '', synonyms: '' },
        { front: 'con ~', back: '와 함께', example: '', example_ko: '', synonyms: '' },
        { front: 'pareja', back: '커플, 애인', example: '', example_ko: '', synonyms: '' },
        { front: 'jardín', back: '정원', example: '', example_ko: '', synonyms: '' },
        { front: 'terraza', back: '테라스', example: '', example_ko: '', synonyms: '' },
        { front: 'grande', back: '큰', example: '', example_ko: '', synonyms: '' },
        { front: 'bonito', back: '예쁜', example: '', example_ko: '', synonyms: '' },
        { front: 'garaje', back: '차고', example: '', example_ko: '', synonyms: '' },
        { front: 'muy', back: '매우', example: '', example_ko: '', synonyms: '' },
        { front: 'tiene', back: '그/그녀는 가지고 있다', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '중고급': [
      { name: '스페인어 중고급 (189~235)', icon: '🎋', words: [
        { front: 'calle', back: '거리', example: '', example_ko: '', synonyms: '' },
        { front: 'restaurante', back: '식당', example: '', example_ko: '', synonyms: '' },
        { front: 'tranquilo', back: '조용한', example: '', example_ko: '', synonyms: '' },
        { front: 'supermercado', back: '슈퍼마켓', example: '', example_ko: '', synonyms: '' },
        { front: 'parque', back: '공원', example: '', example_ko: '', synonyms: '' },
        { front: 'me gusta', back: '나는 좋아한다', example: '', example_ko: '', synonyms: '' },
        { front: 'muchos', back: '많은', example: '', example_ko: '', synonyms: '' },
        { front: 'es divertido', back: '재미있다', example: '', example_ko: '', synonyms: '' },
        { front: 'tiempo libre', back: '자유시간, 여가', example: '', example_ko: '', synonyms: '' },
        { front: 'bailo', back: '나는 춤춘다', example: '', example_ko: '', synonyms: '' },
        { front: 'bailas', back: '너는 춤춘다', example: '', example_ko: '', synonyms: '' },
        { front: 'canto', back: '나는 노래한다', example: '', example_ko: '', synonyms: '' },
        { front: 'cantar', back: '노래하다(동사원형)', example: '', example_ko: '', synonyms: '' },
        { front: 'cantan', back: '그들은 노래한다', example: '', example_ko: '', synonyms: '' },
        { front: 'salsa', back: '살사(춤/음악)', example: '', example_ko: '', synonyms: '' },
        { front: 'escucha', back: '듣다(그/그녀는 듣는다, 또는 명령형 "들어봐")', example: '', example_ko: '', synonyms: '' },
        { front: 'discoteca', back: '클럽, 디스코텍', example: '', example_ko: '', synonyms: '' },
        { front: 'ustedes', back: '당신들(복수)', example: '', example_ko: '', synonyms: '' },
        { front: 'qué haces', back: '뭐 해?', example: '', example_ko: '', synonyms: '' },
        { front: 'miro películas', back: '나는 영화를 본다', example: '', example_ko: '', synonyms: '' },
        { front: 'viajas', back: '너는 여행한다', example: '', example_ko: '', synonyms: '' },
        { front: 'viajo', back: '나는 여행한다', example: '', example_ko: '', synonyms: '' },
        { front: 'viajan', back: '그들은 여행한다', example: '', example_ko: '', synonyms: '' },
        { front: 'mucho', back: '많이', example: '', example_ko: '', synonyms: '' },
        { front: 'en tren', back: '기차로', example: '', example_ko: '', synonyms: '' },
        { front: 'en coche', back: '차로', example: '', example_ko: '', synonyms: '' },
        { front: 'bueno', back: '좋아, 그래', example: '', example_ko: '', synonyms: '' },
        { front: 'pintas', back: '너는 그림 그린다', example: '', example_ko: '', synonyms: '' },
        { front: 'nosotros', back: '우리(남성)', example: '', example_ko: '', synonyms: '' },
        { front: 'nosotras', back: '우리(여성)', example: '', example_ko: '', synonyms: '' },
        { front: 'su', back: '그의/그녀의/그들의', example: '', example_ko: '', synonyms: '' },
        { front: 'somos', back: '우리는 ~이다', example: '', example_ko: '', synonyms: '' },
        { front: 'hermanas', back: '자매들', example: '', example_ko: '', synonyms: '' },
        { front: 'arroz', back: '쌀, 밥', example: '', example_ko: '', synonyms: '' },
        { front: 'sopa', back: '수프', example: '', example_ko: '', synonyms: '' },
        { front: 'pasta', back: '파스타', example: '', example_ko: '', synonyms: '' },
        { front: 'con pollo', back: '닭고기를 곁들인', example: '', example_ko: '', synonyms: '' },
        { front: 'cocino', back: '나는 요리한다', example: '', example_ko: '', synonyms: '' },
        { front: 'cocinamos', back: '우리는 요리한다', example: '', example_ko: '', synonyms: '' },
        { front: 'gimnasio', back: '헬스장', example: '', example_ko: '', synonyms: '' },
        { front: 'fútbol', back: '축구', example: '', example_ko: '', synonyms: '' },
        { front: 'practico', back: '나는 연습한다', example: '', example_ko: '', synonyms: '' },
        { front: 'entrena', back: '그/그녀는 훈련한다', example: '', example_ko: '', synonyms: '' },
        { front: 'frecuentemente', back: '자주', example: '', example_ko: '', synonyms: '' },
        { front: 'al aire libre', back: '야외에서', example: '', example_ko: '', synonyms: '' },
        { front: 'piscina', back: '수영장', example: '', example_ko: '', synonyms: '' },
        { front: 'nado', back: '나는 수영한다', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '고급': [
      { name: '스페인어 고급 (236~282)', icon: '🏔️', words: [
        { front: 'tenis', back: '테니스', example: '', example_ko: '', synonyms: '' },
        { front: 'todos los días', back: '매일', example: '', example_ko: '', synonyms: '' },
        { front: 'levanto pesas', back: '나는 웨이트를 든다', example: '', example_ko: '', synonyms: '' },
        { front: 'equipo', back: '팀, 장비', example: '', example_ko: '', synonyms: '' },
        { front: 'básquetbol', back: '농구', example: '', example_ko: '', synonyms: '' },
        { front: 'ellas', back: '그녀들', example: '', example_ko: '', synonyms: '' },
        { front: 'a menudo', back: '자주', example: '', example_ko: '', synonyms: '' },
        { front: 'esquío', back: '나는 스키를 탄다', example: '', example_ko: '', synonyms: '' },
        { front: 'ya no', back: '더 이상 ~않다', example: '', example_ko: '', synonyms: '' },
        { front: 'ah', back: '아(감탄사)', example: '', example_ko: '', synonyms: '' },
        { front: 'beísbol', back: '야구', example: '', example_ko: '', synonyms: '' },
        { front: 'ellos', back: '그들', example: '', example_ko: '', synonyms: '' },
        { front: 'perezoso', back: '게으른', example: '', example_ko: '', synonyms: '' },
        { front: 'entrenador', back: '코치, 트레이너', example: '', example_ko: '', synonyms: '' },
        { front: 'honestamente', back: '솔직히', example: '', example_ko: '', synonyms: '' },
        { front: 'siempre', back: '항상', example: '', example_ko: '', synonyms: '' },
        { front: 'caminas', back: '너는 걷는다', example: '', example_ko: '', synonyms: '' },
        { front: 'descanso', back: '나는 쉰다, 휴식', example: '', example_ko: '', synonyms: '' },
        { front: 'atlético', back: '운동을 잘하는', example: '', example_ko: '', synonyms: '' },
        { front: 'porque', back: '왜냐하면', example: '', example_ko: '', synonyms: '' },
        { front: 'vecino', back: '이웃', example: '', example_ko: '', synonyms: '' },
        { front: 'dibujo', back: '나는 그림 그린다', example: '', example_ko: '', synonyms: '' },
        { front: 'bien', back: '잘', example: '', example_ko: '', synonyms: '' },
        { front: 'patinas', back: '너는 스케이트를 탄다', example: '', example_ko: '', synonyms: '' },
        { front: 'pescas', back: '너는 낚시한다', example: '', example_ko: '', synonyms: '' },
        { front: 'mal', back: '나쁘게', example: '', example_ko: '', synonyms: '' },
        { front: 'yoga', back: '요가', example: '', example_ko: '', synonyms: '' },
        { front: 'tango', back: '탱고', example: '', example_ko: '', synonyms: '' },
        { front: 'enseñas', back: '너는 가르친다', example: '', example_ko: '', synonyms: '' },
        { front: 'perdón', back: '죄송해요, 실례합니다', example: '', example_ko: '', synonyms: '' },
        { front: 'curso', back: '과정, 코스', example: '', example_ko: '', synonyms: '' },
        { front: 'entonces', back: '그러면', example: '', example_ko: '', synonyms: '' },
        { front: 'interesante', back: '흥미로운', example: '', example_ko: '', synonyms: '' },
        { front: 'son de ~', back: '출신이다(복수)', example: '', example_ko: '', synonyms: '' },
        { front: 'empieza', back: '시작한다', example: '', example_ko: '', synonyms: '' },
        { front: 'mañana', back: '내일, 아침', example: '', example_ko: '', synonyms: '' },
        { front: 'españa', back: '스페인', example: '', example_ko: '', synonyms: '' },
        { front: 'pódcast', back: '팟캐스트', example: '', example_ko: '', synonyms: '' },
        { front: 'persona', back: '사람', example: '', example_ko: '', synonyms: '' },
        { front: 'solo', back: '혼자', example: '', example_ko: '', synonyms: '' },
        { front: 'favorito', back: '가장 좋아하는', example: '', example_ko: '', synonyms: '' },
        { front: 'paseas', back: '너는 산책한다', example: '', example_ko: '', synonyms: '' },
        { front: 'cuatro', back: '넷', example: '', example_ko: '', synonyms: '' },
        { front: 'italia', back: '이탈리아', example: '', example_ko: '', synonyms: '' },
        { front: 'árabe', back: '아랍어', example: '', example_ko: '', synonyms: '' },
        { front: 'aburrido', back: '지루한', example: '', example_ko: '', synonyms: '' },
        { front: 'rusia', back: '러시아', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
  },
  '영어': {
    '입문': [
      { name: '영어 입문', icon: '🌱', words: [
        { front: 'hello', back: '안녕', example: 'Hello! How are you?', example_ko: '안녕! 어떻게 지내?', synonyms: '하이' },
        { front: 'goodbye', back: '안녕(작별)', example: 'Goodbye, see you tomorrow.', example_ko: '안녕, 내일 봐.', synonyms: '' },
        { front: 'please', back: '부탁합니다', example: 'A coffee, please.', example_ko: '커피 한 잔 부탁해요.', synonyms: '' },
        { front: 'thank you', back: '고마워', example: 'Thank you so much.', example_ko: '정말 고마워요.', synonyms: '감사합니다' },
        { front: 'yes', back: '네', example: 'Yes, that is right.', example_ko: '네, 맞아요.', synonyms: '' },
        { front: 'no', back: '아니요', example: 'No, I am not.', example_ko: '아니요, 저는 아니에요.', synonyms: '' },
        { front: 'sorry', back: '미안해요', example: 'Sorry, I am late.', example_ko: '늦어서 미안해요.', synonyms: '' },
        { front: 'name', back: '이름', example: 'What is your name?', example_ko: '이름이 뭐예요?', synonyms: '' },
        { front: 'friend', back: '친구', example: 'He is my friend.', example_ko: '그는 내 친구예요.', synonyms: '' },
        { front: 'family', back: '가족', example: 'My family is big.', example_ko: '우리 가족은 대가족이에요.', synonyms: '' },
        { front: 'today', back: '오늘', example: 'Today is Monday.', example_ko: '오늘은 월요일이에요.', synonyms: '' },
        { front: 'tomorrow', back: '내일', example: 'See you tomorrow.', example_ko: '내일 봐요.', synonyms: '' }
      ]}
    ],
    '초급': [
      { name: '영어 초급', icon: '🌿', words: [
        { front: 'eat', back: '먹다', example: 'I want to eat.', example_ko: '먹고 싶어요.', synonyms: '' },
        { front: 'drink', back: '마시다', example: 'I want to drink water.', example_ko: '물을 마시고 싶어요.', synonyms: '' },
        { front: 'want', back: '원하다', example: 'I want a coffee.', example_ko: '커피를 원해요.', synonyms: '' },
        { front: 'need', back: '필요하다', example: 'I need your help.', example_ko: '당신의 도움이 필요해요.', synonyms: '' },
        { front: 'like', back: '좋아하다', example: 'I like music.', example_ko: '저는 음악을 좋아해요.', synonyms: '' },
        { front: 'house', back: '집', example: 'This is my house.', example_ko: '여기가 제 집이에요.', synonyms: '' },
        { front: 'school', back: '학교', example: 'I go to school.', example_ko: '저는 학교에 가요.', synonyms: '' },
        { front: 'work', back: '일하다, 직장', example: 'I work every day.', example_ko: '저는 매일 일해요.', synonyms: '' },
        { front: 'book', back: '책', example: 'I am reading a book.', example_ko: '저는 책을 읽고 있어요.', synonyms: '' },
        { front: 'water', back: '물', example: 'I drink a lot of water.', example_ko: '저는 물을 많이 마셔요.', synonyms: '' },
        { front: 'food', back: '음식', example: 'This food is delicious.', example_ko: '이 음식은 맛있어요.', synonyms: '' },
        { front: 'morning', back: '아침', example: 'Good morning!', example_ko: '좋은 아침이에요!', synonyms: '' },
        { front: 'night', back: '밤', example: 'Good night.', example_ko: '안녕히 주무세요.', synonyms: '' }
      ]}
    ],
    '초중급': [
      { name: '영어 초중급', icon: '🍀', words: [
        { front: 'where', back: '어디', example: 'Where is the bathroom?', example_ko: '화장실이 어디에 있나요?', synonyms: '' },
        { front: 'when', back: '언제', example: 'When is the meeting?', example_ko: '회의가 언제예요?', synonyms: '' },
        { front: 'why', back: '왜', example: 'Why are you late?', example_ko: '왜 늦었어요?', synonyms: '' },
        { front: 'how much', back: '얼마예요', example: 'How much is this?', example_ko: '이거 얼마예요?', synonyms: '' },
        { front: 'buy', back: '사다', example: 'I want to buy this.', example_ko: '이걸 사고 싶어요.', synonyms: '' },
        { front: 'sell', back: '팔다', example: 'They sell fresh fruit.', example_ko: '그들은 신선한 과일을 팔아요.', synonyms: '' },
        { front: 'expensive', back: '비싼', example: 'This bag is expensive.', example_ko: '이 가방은 비싸요.', synonyms: '' },
        { front: 'cheap', back: '싼', example: 'This is very cheap.', example_ko: '이건 아주 싸요.', synonyms: '' },
        { front: 'travel', back: '여행하다', example: 'I love to travel.', example_ko: '저는 여행을 좋아해요.', synonyms: '' },
        { front: 'hotel', back: '호텔', example: 'We are staying at a hotel.', example_ko: '우리는 호텔에 묵고 있어요.', synonyms: '' },
        { front: 'airport', back: '공항', example: 'The airport is far away.', example_ko: '공항은 멀어요.', synonyms: '' },
        { front: 'ticket', back: '표', example: 'I bought a ticket.', example_ko: '표를 샀어요.', synonyms: '' },
        { front: 'luggage', back: '짐, 수하물', example: 'My luggage is heavy.', example_ko: '제 짐이 무거워요.', synonyms: '' }
      ]}
    ],
    '중급': [
      { name: '영어 중급', icon: '🌳', words: [
        { front: 'however', back: '그러나', example: 'It is expensive, however I need it.', example_ko: '비싸지만 그래도 필요해요.', synonyms: '' },
        { front: 'although', back: '비록 ~이지만', example: 'Although it rains, I go out.', example_ko: '비가 오지만 나가요.', synonyms: '' },
        { front: 'opinion', back: '의견', example: 'What is your opinion?', example_ko: '너의 의견은 뭐야?', synonyms: '' },
        { front: 'decide', back: '결정하다', example: 'I cannot decide.', example_ko: '결정을 못 하겠어요.', synonyms: '' },
        { front: 'improve', back: '향상시키다', example: 'I want to improve my English.', example_ko: '영어 실력을 늘리고 싶어요.', synonyms: '' },
        { front: 'experience', back: '경험', example: 'I have little experience.', example_ko: '저는 경험이 적어요.', synonyms: '' },
        { front: 'meeting', back: '회의', example: 'I have a meeting.', example_ko: '저는 회의가 있어요.', synonyms: '' },
        { front: 'achieve', back: '성취하다', example: 'I achieved my goal.', example_ko: '목표를 이뤘어요.', synonyms: '' },
        { front: 'plan', back: '계획하다, 계획', example: 'What is your plan?', example_ko: '계획이 뭐예요?', synonyms: '' },
        { front: 'worry', back: '걱정하다', example: 'Do not worry about it.', example_ko: '그것에 대해 걱정하지 마세요.', synonyms: '' },
        { front: 'hope', back: '희망하다, 바라다', example: 'I hope you feel better.', example_ko: '나아지길 바라요.', synonyms: '' },
        { front: 'prefer', back: '선호하다', example: 'I prefer tea to coffee.', example_ko: '저는 커피보다 차를 선호해요.', synonyms: '' }
      ]}
    ],
    '중고급': [
      { name: '영어 중고급', icon: '🎋', words: [
        { front: 'nevertheless', back: '그럼에도 불구하고', example: 'Nevertheless, I kept going.', example_ko: '그럼에도 불구하고 계속 나아갔어요.', synonyms: '' },
        { front: 'consequently', back: '결과적으로', example: 'Consequently, we changed the plan.', example_ko: '결과적으로 계획을 바꿨어요.', synonyms: '' },
        { front: 'perspective', back: '관점', example: 'She has a different perspective.', example_ko: '그녀는 다른 관점을 가지고 있어요.', synonyms: '' },
        { front: 'controversial', back: '논란이 되는', example: 'It is a controversial topic.', example_ko: '논란이 되는 주제예요.', synonyms: '' },
        { front: 'significant', back: '중요한, 상당한', example: 'It is a significant change.', example_ko: '상당한 변화예요.', synonyms: '' },
        { front: 'ambiguous', back: '모호한', example: 'The answer is ambiguous.', example_ko: '답이 모호해요.', synonyms: '' },
        { front: 'responsibility', back: '책임', example: 'It is my responsibility.', example_ko: '그건 제 책임이에요.', synonyms: '' },
        { front: 'sustainable', back: '지속 가능한', example: 'We need a sustainable future.', example_ko: '지속 가능한 미래가 필요해요.', synonyms: '' },
        { front: 'assume', back: '가정하다', example: 'I assume you already know.', example_ko: '이미 아실 거라 가정할게요.', synonyms: '' },
        { front: 'occur', back: '발생하다', example: 'The problem occurred yesterday.', example_ko: '어제 문제가 발생했어요.', synonyms: '' },
        { front: 'reluctant', back: '꺼리는, 주저하는', example: 'She was reluctant to answer.', example_ko: '그녀는 대답하기를 꺼려했어요.', synonyms: '' },
        { front: 'gradually', back: '점차적으로', example: 'The weather is gradually improving.', example_ko: '날씨가 점차 좋아지고 있어요.', synonyms: '' }
      ]}
    ],
    '고급': [
      { name: '영어 고급', icon: '🏔️', words: [
        { front: 'inevitable', back: '불가피한', example: 'Change is inevitable.', example_ko: '변화는 불가피해요.', synonyms: '' },
        { front: 'ultimately', back: '궁극적으로', example: 'Ultimately, it was the right choice.', example_ko: '궁극적으로 옳은 선택이었어요.', synonyms: '' },
        { front: 'comprehensive', back: '포괄적인, 종합적인', example: 'We need a comprehensive plan.', example_ko: '종합적인 계획이 필요해요.', synonyms: '' },
        { front: 'arbitrary', back: '임의의, 자의적인', example: 'The rule seems arbitrary.', example_ko: '그 규칙은 자의적으로 보여요.', synonyms: '' },
        { front: 'prevalent', back: '널리 퍼진, 만연한', example: 'The problem is prevalent worldwide.', example_ko: '그 문제는 전 세계적으로 만연해요.', synonyms: '' },
        { front: 'unprecedented', back: '전례 없는', example: 'It was an unprecedented decision.', example_ko: '전례 없는 결정이었어요.', synonyms: '' },
        { front: 'meticulous', back: '꼼꼼한, 세심한', example: 'She is meticulous about details.', example_ko: '그녀는 디테일에 세심해요.', synonyms: '' },
        { front: 'profound', back: '깊은, 심오한', example: 'It had a profound effect.', example_ko: '그것은 깊은 영향을 미쳤어요.', synonyms: '' },
        { front: 'resilience', back: '회복력, 탄력성', example: 'She showed great resilience.', example_ko: '그녀는 큰 회복력을 보여줬어요.', synonyms: '' },
        { front: 'integrity', back: '진실성, 무결성', example: 'He acted with integrity.', example_ko: '그는 진실성 있게 행동했어요.', synonyms: '' },
        { front: 'skeptical', back: '회의적인', example: 'I am skeptical about this idea.', example_ko: '저는 이 생각에 회의적이에요.', synonyms: '' },
        { front: 'nuanced', back: '미묘한 차이가 있는', example: 'It is a nuanced argument.', example_ko: '그건 미묘한 논점이에요.', synonyms: '' }
      ]}
    ]
  },
  '중국어': {
    '입문': [
      { name: '중국어 입문 - 섹션1 유닛 1 음식과 음료 말하기', icon: '🌱', words: [
        { front: '豆腐', pinyin: 'dòufu', back: '두부', example: '', example_ko: '', synonyms: '' },
        { front: '和', pinyin: 'hé', back: '~와', example: '', example_ko: '', synonyms: '' },
        { front: '汤', pinyin: 'tāng', back: '국', example: '', example_ko: '', synonyms: '' },
        { front: '这是', pinyin: 'zhè shì', back: '이것은', example: '', example_ko: '', synonyms: '' },
        { front: '茶', pinyin: 'chá', back: '차', example: '', example_ko: '', synonyms: '' },
        { front: '米饭', pinyin: 'mǐfàn', back: '밥', example: '', example_ko: '', synonyms: '' },
        { front: '咖啡', pinyin: 'kāfēi', back: '커피', example: '', example_ko: '', synonyms: '' },
        { front: '水', pinyin: 'shuǐ', back: '물', example: '', example_ko: '', synonyms: '' },
        { front: '粥', pinyin: 'zhōu', back: '죽', example: '', example_ko: '', synonyms: '' },
        { front: '热', pinyin: 'rè', back: '뜨겁다', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '초급': [
      { name: '중국어 초급 - 섹션1 유닛 2 국적에 대해 말하기', icon: '🌿', words: [
        { front: '嗨', pinyin: 'hāi', back: '안녕', example: '', example_ko: '', synonyms: '' },
        { front: '我', pinyin: 'wǒ', back: '나', example: '', example_ko: '', synonyms: '' },
        { front: '是', pinyin: 'shì', back: '~이다', example: '', example_ko: '', synonyms: '' },
        { front: '中国', pinyin: 'Zhōngguó', back: '중국', example: '', example_ko: '', synonyms: '' },
        { front: '韩国', pinyin: 'Hánguó', back: '한국', example: '', example_ko: '', synonyms: '' },
        { front: '美国', pinyin: 'Měiguó', back: '미국', example: '', example_ko: '', synonyms: '' },
        { front: '英国', pinyin: 'Yīngguó', back: '영국', example: '', example_ko: '', synonyms: '' },
        { front: '日本', pinyin: 'Rìběn', back: '일본', example: '', example_ko: '', synonyms: '' },
        { front: '人', pinyin: 'rén', back: '사람', example: '', example_ko: '', synonyms: '' },
        { front: '你', pinyin: 'nǐ', back: '너', example: '', example_ko: '', synonyms: '' },
        { front: '你呢', pinyin: 'nǐ ne', back: '너는?', example: '', example_ko: '', synonyms: '' },
        { front: '加拿大', pinyin: 'Jiānádà', back: '캐나다', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '초중급': [
      { name: '중국어 초중급 - 섹션2 유닛 1 형용사를 사용해 묘사하기', icon: '🍀', words: [
        { front: '厨房', pinyin: 'chúfáng', back: '주방', example: '', example_ko: '', synonyms: '' },
        { front: '卧室', pinyin: 'wòshì', back: '침실', example: '', example_ko: '', synonyms: '' },
        { front: '房子', pinyin: 'fángzi', back: '집', example: '', example_ko: '', synonyms: '' },
        { front: '大', pinyin: 'dà', back: '크다', example: '', example_ko: '', synonyms: '' },
        { front: '小', pinyin: 'xiǎo', back: '작다', example: '', example_ko: '', synonyms: '' },
        { front: '很', pinyin: 'hěn', back: '매우', example: '', example_ko: '', synonyms: '' },
        { front: '漂亮', pinyin: 'piàoliang', back: '예쁘다', example: '', example_ko: '', synonyms: '' },
        { front: '公寓', pinyin: 'gōngyù', back: '아파트', example: '', example_ko: '', synonyms: '' },
        { front: '床', pinyin: 'chuáng', back: '침대', example: '', example_ko: '', synonyms: '' },
        { front: '电视', pinyin: 'diànshì', back: 'TV', example: '', example_ko: '', synonyms: '' },
        { front: '沙发', pinyin: 'shāfā', back: '소파', example: '', example_ko: '', synonyms: '' },
        { front: '舒服', pinyin: 'shūfu', back: '편하다', example: '', example_ko: '', synonyms: '' },
        { front: '冰箱', pinyin: 'bīngxiāng', back: '냉장고', example: '', example_ko: '', synonyms: '' },
        { front: '桌子', pinyin: 'zhuōzi', back: '책상', example: '', example_ko: '', synonyms: '' },
        { front: '旧', pinyin: 'jiù', back: '낡다', example: '', example_ko: '', synonyms: '' },
        { front: '乱', pinyin: 'luàn', back: '어지럽다', example: '', example_ko: '', synonyms: '' },
        { front: '只', pinyin: 'zhī', back: '마리(동물 단위)', example: '', example_ko: '', synonyms: '' },
        { front: '客厅', pinyin: 'kètīng', back: '거실', example: '', example_ko: '', synonyms: '' },
        { front: '哇', pinyin: 'wa', back: '와', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '중급': [
      { name: '중국어 중급 - 섹션2 유닛 5 능력 표현하는 조동사 사용하기', icon: '🌳', words: [
        { front: '俱乐部', pinyin: 'jùlèbù', back: '동아리', example: '', example_ko: '', synonyms: '' },
        { front: '喜剧', pinyin: 'xǐjù', back: '코미디', example: '', example_ko: '', synonyms: '' },
        { front: '有趣', pinyin: 'yǒuqù', back: '재미있다', example: '', example_ko: '', synonyms: '' },
        { front: '足球', pinyin: 'zúqiú', back: '축구', example: '', example_ko: '', synonyms: '' },
        { front: '踢', pinyin: 'tī', back: '차다', example: '', example_ko: '', synonyms: '' },
        { front: '棒球', pinyin: 'bàngqiú', back: '야구', example: '', example_ko: '', synonyms: '' },
        { front: '一起', pinyin: 'yìqǐ', back: '함께', example: '', example_ko: '', synonyms: '' },
        { front: '会', pinyin: 'huì', back: '~할 수 있다', example: '', example_ko: '', synonyms: '' },
        { front: '钢琴', pinyin: 'gāngqín', back: '피아노', example: '', example_ko: '', synonyms: '' },
        { front: '弹', pinyin: 'tán', back: '연주하다', example: '', example_ko: '', synonyms: '' },
        { front: '吉他', pinyin: 'jítā', back: '기타', example: '', example_ko: '', synonyms: '' },
        { front: '流行', pinyin: 'liúxíng', back: '유행하다', example: '', example_ko: '', synonyms: '' },
        { front: '唱歌', pinyin: 'chànggē', back: '노래하다', example: '', example_ko: '', synonyms: '' },
        { front: '西班牙语', pinyin: 'Xībānyáyǔ', back: '스페인어', example: '', example_ko: '', synonyms: '' },
        { front: '法语', pinyin: 'Fǎyǔ', back: '프랑스어', example: '', example_ko: '', synonyms: '' },
        { front: '练习', pinyin: 'liànxí', back: '연습하다', example: '', example_ko: '', synonyms: '' },
        { front: '语言', pinyin: 'yǔyán', back: '언어', example: '', example_ko: '', synonyms: '' },
        { front: '种', pinyin: 'zhǒng', back: '종류', example: '', example_ko: '', synonyms: '' },
        { front: '面包', pinyin: 'miànbāo', back: '빵', example: '', example_ko: '', synonyms: '' },
        { front: '面条', pinyin: 'miàntiáo', back: '국수', example: '', example_ko: '', synonyms: '' },
        { front: '饼干', pinyin: 'bǐnggān', back: '과자', example: '', example_ko: '', synonyms: '' },
        { front: '烤', pinyin: 'kǎo', back: '굽다', example: '', example_ko: '', synonyms: '' },
        { front: '泰国', pinyin: 'Tàiguó', back: '태국', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '중고급': [
      { name: '중국어 중고급 - 섹션2 유닛 13 어린 시절 이야기하기', icon: '🎋', words: [
        { front: '人', pinyin: 'rén', back: '사람', example: '', example_ko: '', synonyms: '' },
        { front: '上海', pinyin: 'Shànghǎi', back: '상하이', example: '', example_ko: '', synonyms: '' },
        { front: '在', pinyin: 'zài', back: '~에', example: '', example_ko: '', synonyms: '' },
        { front: '出生', pinyin: 'chūshēng', back: '태어나다', example: '', example_ko: '', synonyms: '' },
        { front: '长大', pinyin: 'zhǎngdà', back: '자라다', example: '', example_ko: '', synonyms: '' },
        { front: '九', pinyin: 'jiǔ', back: '아홉', example: '', example_ko: '', synonyms: '' },
        { front: '中学', pinyin: 'zhōngxué', back: '중학교', example: '', example_ko: '', synonyms: '' },
        { front: '小学', pinyin: 'xiǎoxué', back: '초등학교', example: '', example_ko: '', synonyms: '' },
        { front: '很多', pinyin: 'hěn duō', back: '많다', example: '', example_ko: '', synonyms: '' },
        { front: '年', pinyin: 'nián', back: '년', example: '', example_ko: '', synonyms: '' },
        { front: '零', pinyin: 'líng', back: '영', example: '', example_ko: '', synonyms: '' },
        { front: '上', pinyin: 'shàng', back: '올라가다', example: '', example_ko: '', synonyms: '' },
        { front: '七', pinyin: 'qī', back: '일곱', example: '', example_ko: '', synonyms: '' },
        { front: '香港', pinyin: 'Xiānggǎng', back: '홍콩', example: '', example_ko: '', synonyms: '' },
        { front: '工作', pinyin: 'gōngzuò', back: '일하다', example: '', example_ko: '', synonyms: '' },
        { front: '生活', pinyin: 'shēnghuó', back: '생활하다', example: '', example_ko: '', synonyms: '' },
        { front: '出国', pinyin: 'chūguó', back: '출국하다', example: '', example_ko: '', synonyms: '' },
        { front: '回', pinyin: 'huí', back: '돌아가다', example: '', example_ko: '', synonyms: '' },
        { front: '旅行', pinyin: 'lǚxíng', back: '여행하다', example: '', example_ko: '', synonyms: '' },
        { front: '岁', pinyin: 'suì', back: '살', example: '', example_ko: '', synonyms: '' },
        { front: '前', pinyin: 'qián', back: '전', example: '', example_ko: '', synonyms: '' },
        { front: '八', pinyin: 'bā', back: '여덟', example: '', example_ko: '', synonyms: '' },
        { front: '桌游', pinyin: 'zhuōyóu', back: '보드게임', example: '', example_ko: '', synonyms: '' },
        { front: '动画片', pinyin: 'dònghuàpiàn', back: '애니메이션', example: '', example_ko: '', synonyms: '' },
        { front: '小时候', pinyin: 'xiǎoshíhou', back: '어릴 때', example: '', example_ko: '', synonyms: '' },
        { front: '流行', pinyin: 'liúxíng', back: '유행하다', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
    '고급': [
      { name: '중국어 고급 - 섹션2 유닛 27 간접 목적어 사용하기', icon: '🏔️', words: [
        { front: '意大利语', pinyin: 'Yìdàlìyǔ', back: '이탈리아어', example: '', example_ko: '', synonyms: '' },
        { front: '小组', pinyin: 'xiǎozǔ', back: '팀, 그룹', example: '', example_ko: '', synonyms: '' },
        { front: '作文', pinyin: 'zuòwén', back: '작문', example: '', example_ko: '', synonyms: '' },
        { front: '问题', pinyin: 'wèntí', back: '질문, 문제', example: '', example_ko: '', synonyms: '' },
        { front: '节', pinyin: 'jié', back: '교시(수업 단위)', example: '', example_ko: '', synonyms: '' },
        { front: '选', pinyin: 'xuǎn', back: '고르다, 선택하다', example: '', example_ko: '', synonyms: '' },
        { front: '问', pinyin: 'wèn', back: '묻다, 질문하다', example: '', example_ko: '', synonyms: '' },
        { front: '讨论', pinyin: 'tǎolùn', back: '토론하다, 논의하다', example: '', example_ko: '', synonyms: '' },
        { front: '题目', pinyin: 'tímù', back: '제목, 문제', example: '', example_ko: '', synonyms: '' },
        { front: '什么时候', pinyin: 'shénme shíhou', back: '언제', example: '', example_ko: '', synonyms: '' },
        { front: '笔', pinyin: 'bǐ', back: '펜, 필기구', example: '', example_ko: '', synonyms: '' },
        { front: '支', pinyin: 'zhī', back: '자루(펜 등을 세는 양사)', example: '', example_ko: '', synonyms: '' },
        { front: '邮件', pinyin: 'yóujian', back: '우편물, 이메일', example: '', example_ko: '', synonyms: '' },
        { front: '封', pinyin: 'fēng', back: '통(편지 등을 세는 양사)', example: '', example_ko: '', synonyms: '' },
        { front: '借', pinyin: 'jiè', back: '빌리다, 빌려주다', example: '', example_ko: '', synonyms: '' },
        { front: '想法', pinyin: 'xiǎngfǎ', back: '생각, 아이디어', example: '', example_ko: '', synonyms: '' },
        { front: '有用', pinyin: 'yǒuyòng', back: '유용하다, 쓸모가 있다', example: '', example_ko: '', synonyms: '' },
        { front: '翻译', pinyin: 'fānyì', back: '번역하다, 통역하다', example: '', example_ko: '', synonyms: '' },
        { front: '给', pinyin: 'gěi', back: '주다, ~에게', example: '', example_ko: '', synonyms: '' },
        { front: '见', pinyin: 'jiàn', back: '만나다, 보다', example: '', example_ko: '', synonyms: '' },
        { front: '昨晚', pinyin: 'zuówǎn', back: '어젯밤', example: '', example_ko: '', synonyms: '' },
        { front: '交', pinyin: 'jiāo', back: '제출하다, 내다', example: '', example_ko: '', synonyms: '' },
        { front: '完成', pinyin: 'wánchéng', back: '완성하다, 마치다', example: '', example_ko: '', synonyms: '' },
        { front: '每个', pinyin: 'měi gè', back: '각각, 모든 것', example: '', example_ko: '', synonyms: '' },
        { front: '怎么办', pinyin: 'zěnmebàn', back: '어떻게 하지', example: '', example_ko: '', synonyms: '' },
      ]}
    ],
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
  deckMode: localStorage.getItem('lingo-deck-mode') || 'course'
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
  const title = !state.user ? 'PolyGo에 오신 걸 환영해요' : state.screen === 'onboarding' ? '시작하기' : state.screen === 'home' ? `${GREETINGS[state.language]||'안녕'}, ${escape(name)}님` : state.screen === 'study' ? deck().name : state.screen === 'quiz' ? '퀴즈' : state.screen === 'mistakes' ? '오답 노트' : state.screen === 'ai' ? 'AI 튜터' : state.screen === 'completed' ? '완료한 단어장' : '새 단어장';
  return `<header><div><p class="eyebrow">${!state.user ? '나만의 언어 학습 공간' : state.screen === 'onboarding' ? '거의 다 됐어요' : state.screen === 'home' ? '오늘도 한 걸음씩' : state.language}</p><h1>${title}</h1></div>${state.user && state.screen!=='onboarding'?`<button class="icon-btn" data-action="drawer">${icon('menu')}</button>`:''}</header>`;
}
function content() { return `<section class="content">${!configured ? setup() : !state.user ? auth() : state.screen === 'onboarding' ? onboarding() : state.screen === 'home' ? home() : state.screen === 'study' ? study() : state.screen === 'quiz' ? quiz() : state.screen === 'mistakes' ? mistakes() : state.screen === 'ai' ? aiChat() : state.screen === 'completed' ? completedDecksScreen() : create()}</section>`; }
function setup(){return `<div class="empty"><div>⚙</div><h2>서버 연결을 준비해 주세요</h2><p>config.js에 Supabase 주소와 Publishable key를 넣으면 회원가입과 클라우드 저장을 시작할 수 있어요.</p></div>`}
function auth(){const signup=state.authMode==='signup';return `<div class="auth-card"><div class="auth-mark">P</div><h2>${signup?'회원가입':'로그인'}</h2><p>${signup?'가입하면 단어장이 개인 계정에 안전하게 저장돼요.':'어디서든 내 단어장을 이어서 학습하세요.'}</p><form id="auth-form">${signup?'<label>닉네임<input type="text" name="nickname" required minlength="1" maxlength="30" placeholder="다른 사람에게 보여질 이름" /></label>':''}<label>이메일<input type="email" name="email" required autocomplete="email" placeholder="name@example.com" /></label><label>비밀번호<input type="password" name="password" required minlength="8" autocomplete="${signup?'new-password':'current-password'}" placeholder="8자 이상" /></label>${signup?'<label>비밀번호 확인<input type="password" name="passwordConfirm" required minlength="8" autocomplete="new-password" placeholder="비밀번호를 다시 입력하세요" /></label>':''}<button class="primary" type="submit">${signup?'회원가입':'로그인'}</button></form><button class="auth-switch" data-action="auth-mode">${signup?'이미 계정이 있나요? 로그인':'계정이 없나요? 회원가입'}</button><div class="oauth-row"><span>또는</span><button class="oauth-btn" data-action="oauth-google">Google로 계속하기</button><button class="oauth-btn" data-action="oauth-kakao">Kakao로 계속하기</button></div></div>`}
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
  const levelOptions = LEVELS;
  const goalOptions = ['여행','커리어','취미','친목'];
  return `<div class="create-head"><h2>${escape(lang)} 학습 정보</h2><p>현재 수준과 목표를 알려주세요. (${o.goalIndex+1}/${o.languages.length})</p></div><div class="section-title"><h2>현재 수준</h2></div><div class="deck-list">${levelOptions.map(v=>`<button class="deck-row ${level===v?'selected':''}" data-action="onboard-level" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${level===v?'<b>✓</b>':''}</button>`).join('')}</div><div class="section-title"><h2>목표 (여러 개 선택 가능)</h2></div><div class="deck-list">${goalOptions.map(v=>`<button class="deck-row ${goals.includes(v)?'selected':''}" data-action="onboard-goal" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${goals.includes(v)?'<b>✓</b>':''}</button>`).join('')}</div><div class="onboard-actions"><button class="primary" data-action="onboard-next">${o.goalIndex+1<o.languages.length?'다음 언어':'완료'} ${icon('chev')}</button></div>`;
}
function nav(){return state.user && state.screen!=='onboarding'?`<nav><button class="${state.screen==='home'?'active':''}" data-screen="home">${icon('home')}<span>홈</span></button><button class="${state.screen==='study'?'active':''}" data-screen="study">${icon('book')}<span>단어장</span></button><button class="${state.screen==='quiz'?'active':''}" data-screen="quiz">${icon('quiz')}<span>퀴즈</span></button><button class="${state.screen==='mistakes'?'active':''}" data-screen="mistakes">${icon('redo')}<span>오답</span></button></nav>`:'';}
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
    ? `<h2>${escape(state.language)} 학습 레벨</h2><p class="modal-copy">레벨을 고르면 그 레벨에 맞는 새 단어장이 추가돼요. 다른 언어의 레벨을 바꾸려면 학습 언어를 먼저 바꾼 뒤 다시 열어주세요.</p>${LEVELS.map(v=>`<button class="choice-line ${state.userLevels[state.language]===v?'selected':''}" data-action="set-level" data-value="${v}">${v} ${state.userLevels[state.language]===v?'<b>✓</b>':''}</button>`).join('')}`
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
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(b.dataset.answer));
  document.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>rate(Number(b.dataset.rate)));
  const form=$('#create-form'); if(form) form.onsubmit=createDeck;
  const authForm=$('#auth-form'); if(authForm) authForm.onsubmit=authenticate;
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
    const nickname = f.get('nickname').trim();
    if (!nickname) return alert('닉네임을 입력해 주세요.');
    const result = await supabase.auth.signUp({ email, password });
    if (result.error) return alert(result.error.message);
    if (!result.data.session) return alert('가입 확인 메일을 보냈어요. 메일의 링크를 누른 뒤 로그인해 주세요.');
    state.user = result.data.user;
    state.nickname = nickname;
    await supabase.from('profiles').upsert({ id: state.user.id, nickname });
    await loadCloudData(false);
    state.onboard = { step: 0, gender: null, age: null, languages: [], goalIndex: 0, levels: {}, goals: {} };
    state.screen = 'onboarding';
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
    const level = o.levels[lang] || '초급';
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
  const lvl = level || state.userLevels[language] || '초급';
  const byLevel = initialDecksByLevel[language] || {};
  const samples = byLevel[lvl] || byLevel['초급'] || [];
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
  state.userLevels = {}; (uls||[]).forEach(u => { state.userLevels[u.language] = u.level || '초급'; });
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
    const nickname = (prompt('닉네임을 입력해 주세요.') || newUser.email.split('@')[0]).trim();
    state.nickname = nickname;
    await supabase.from('profiles').upsert({ id: newUser.id, nickname });
    state.onboard = { step: 0, gender: null, age: null, languages: [], goalIndex: 0, levels: {}, goals: {} };
    state.screen = 'onboarding';
  } else {
    await ensureLanguageSeed(state.language);
    const langDecks = modeDecks();
    state.deckId = langDecks[0]?.id || decks[0]?.id || null;
  }
  if (state.pendingShare) await claimSharedDeck(state.pendingShare);
}
async function init() {
  if (!configured) { render(); return; }
  const params = new URLSearchParams(location.search);
  const shareToken = params.get('share');
  if (shareToken) state.pendingShare = shareToken;
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) await handleSignedInUser(session.user);
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
