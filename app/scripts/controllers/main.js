'use strict';

angular.module('WordWaveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.words = [
      { "word": "ד' אמות", "interpretation": "מקום מצומצם, הסביבה הקרובה לאדם." },
      { "word": "דא עקא", "interpretation": "זו הצרה." },
      { "word": "דאבה", "interpretation": "צער, יגון, דכדוך, תוגה, נכאים." },
      { "word": "דאז", "interpretation": "בעת ההיא." },
      { "word": "דאיה", "interpretation": "ריחוף באוויר." },
      { "word": "דבוקה", "interpretation": "1. צרור פצצות; 2. קבוצת צנחנים." },
      { "word": "דבלה", "interpretation": "גוש תאנים מיובשות, גרוגרת." },
      { "word": "דבלול", "interpretation": "1. קצה חוט היוצא מבד; קווצת שיער על המצח." },
      { "word": "דבקה לשונו לחיכו", "interpretation": "שתק, נאלם." },
      { "word": "דבקה נפשו", "interpretation": "אהב." },
      { "word": "דבר אל העצים ואל האבנים!", "interpretation": "אין עונה, אין תגובה, דיבור לאוזניים ערלות." },
      { "word": "דבר בעיתו", "interpretation": "דבר שנעשה בזמן המתאים." },
      { "word": "דבר דבור על אופניו", "interpretation": "עניין ערוך כהלכה." },
      { "word": "דברי חלקות", "interpretation": "חנופה." },
      { "word": "דברי כיבושין", "interpretation": "דברי תוכחה ומוסר." },
      { "word": "דברי סרק", "interpretation": "שטויות." },
      { "word": "דברי קילוסין", "interpretation": "מחמאות, תשבחות." },
      { "word": "דברים בטלים", "interpretation": "דברים לא חשובים." },
      { "word": "דברים בעלמא", "interpretation": "פטפוטים, עורבא פרח." },
      { "word": "דברים העומדים ברומו של עולם", "interpretation": "דברים נעלים וחשובים." },
      { "word": "דברים כדורבנות", "interpretation": "אמירה חריפה והחלטית." },
      { "word": "דבשה", "interpretation": "נוזל מתוק, שנוצר בהפקת סוכר." },
      { "word": "דגה", "interpretation": "שם קיבוצי לכל הדגים." },
      { "word": "דגול", "interpretation": "אדם נכבד, חשוב, ידוע." },
      { "word": "דגל לבן", "interpretation": "דגל המסמל כניעה או הפסקת פעולות קרב." },
      { "word": "דדוקציה", "interpretation": "הסקה מהכלל אל הפרט." },
      { "word": "דה יורה", "interpretation": "להלכה, תיאורטית, בכח." },
      { "word": "דה פקטו", "interpretation": "למעשה, בפועל בדיעבד." },
      { "word": "דהוי", "interpretation": "שצבעו נחלש והחוויר." },
      { "word": "דהיינו", "interpretation": "כלומר." },
      { "word": "דו פרצופי", "interpretation": "צבוע, חסר כנות." },
      { "word": "דואלי", "interpretation": "בעל שני צדדים, דיכוטומי." },
      { "word": "דוברה", "interpretation": "רפסודה, אסדה, ארבה." },
      { "word": "דוגמה", "interpretation": "הנחה שמתקבלת כאמת מוחלטת." },
      { "word": "דוגמטי", "interpretation": "דבר מוסכם שאין לערער עליו." },
      { "word": "דודים", "interpretation": "אהבים." },
      { "word": "דווי", "interpretation": "כאב, מיוסר, אבל, נכא, מדוכדך." },
      { "word": "דו-חי", "interpretation": "בעל חיים החי הן במים והן ביבשה." },
      { "word": "דוחן", "interpretation": "סוג תבואה, דגן." },
      { "word": "דומיננטי", "interpretation": "ראשי, עיקרי, בולט." },
      { "word": "דומם", "interpretation": "בשקט, בדומיה, חרש, בלאט." },
      { "word": "דומן", "interpretation": "זבל, זוהמה, מיאוס, סחי." },
      { "word": "דופי", "interpretation": "פגם, גנאי." },
      { "word": "דופליקט", "interpretation": "העתק." },
      { "word": "דוק", "interpretation": "שכבה דקיקה, קרום דקיק." },
      { "word": "דוקומנטרי", "interpretation": "תיעודי." },
      { "word": "דוקטרינה", "interpretation": "שיטה, תורה, דיסציפלינה." },
      { "word": "דורון", "interpretation": "מתנה, שי, מנחה, אשכר, אתנן." },
      { "word": "דחה אותו בלך ושוב", "interpretation": "התחמק ממתן תשובה ברורה." },
      { "word": "דחי", "interpretation": "כישלון, תקלה, פוקה, רועץ." },
      { "word": "דחיות בקש", "interpretation": "תירוצים קלושים." },
      { "word": "דחפור", "interpretation": "טרקטור החופר ומזיז סלעים, בולדוזר." },
      { "word": "דחק את הקץ", "interpretation": "לחץ להקדים את הסוף מתוך חוסר סבלנות." },
      { "word": "דחק את רגליו", "interpretation": "תפס את מקומו." },
      { "word": "דטרמיניזם", "interpretation": "אמונה שהכל נקבע מראש ללא אפשרות שינוי." },
      { "word": "דיאגנוסטי", "interpretation": "מאבחן." },
      { "word": "דיאכרוני", "interpretation": "ערוך לפי התפתחות הסטורית." },
      { "word": "דיאלוג", "interpretation": "רב שיח, שיחה בת שני משתתפים לפחות." },
      { "word": "דיאלקטי", "interpretation": "וכחני, המשקף ניגודים." },
      { "word": "דיבה", "interpretation": "דברי גנאי, לעז, לשון הרע." },
      { "word": "דיבוב", "interpretation": "גרימה לכך שמישהו ידבר." },
      { "word": "דיבידנד", "interpretation": "חלק מסוים מן הרווחים, המתחלקים בין בעלי החברה." },
      { "word": "דיבר אל ליבו", "interpretation": "פייס אותו, שכנע אותו." },
      { "word": "דיבר גבוהה גבוהה", "interpretation": "דיבר בשפה נמלצת." },
      { "word": "דיבר סרה", "interpretation": "גינה, השמיץ, ביזה." },
      { "word": "דיבר על ליבו", "interpretation": "ניסה לשכנע אותו." },
      { "word": "דידוי", "interpretation": "הליכה בדילוגים או בקפיצות." },
      { "word": "דידקטי", "interpretation": "קשור בהוראה, לימודי, מאלף." },
      { "word": "דיונה", "interpretation": "חולית, גבעת חול." },
      { "word": "דיוקן", "interpretation": "תיאור פניו של אדם." },
      { "word": "דיוטה", "interpretation": "קומה בבניין." },
      { "word": "דיכוטומיה", "interpretation": "התפצלות, חלוקה לשניים." },
      { "word": "דילטאנט", "interpretation": "בעל ידיעות שטחיות, הדיוט." },
      { "word": "דילמה", "interpretation": "בעיה, התלבטות." },
      { "word": "דין", "interpretation": "שופט." },
      { "word": "דין ודברים", "interpretation": "ויכוח, טענות ומענות." },
      { "word": "דין פרוטה כדין מאה", "interpretation": "יש להתייחס לדברים פחותי ערך כמו ליקרים." },
      { "word": "דינאמי", "interpretation": "מתפתח." },
      { "word": "דיסוננס", "interpretation": "חוסר התאמה, צרימה." },
      { "word": "דיסציפלינה", "interpretation": "שיטה, תורה, אסכולה." },
      { "word": "דיסקרימינציה", "interpretation": "אפליה." },
      { "word": "דיפוזי", "interpretation": "חדיר." },
      { "word": "דיפון", "interpretation": "חיזוק דפנות של בור." },
      { "word": "דיצה", "interpretation": "שמחה, ששון, עליצות, משוש." },
      { "word": "דיקטטור", "interpretation": "שליט יחיד, דספוט, אוטוקרט." },
      { "word": "דירבון", "interpretation": "זירוז, האצה." },
      { "word": "דירקטוריון", "interpretation": "מועצת המנהלים של חברה או מוסד." },
      { "word": "דירת שרד", "interpretation": "מעון רשמי של בעלי תפקיד." },
      { "word": "דך", "interpretation": "מסכן, רצוץ, מעונה." },
      { "word": "דכי", "interpretation": "שאון הגלים." },
      { "word": "דל", "interpretation": "עני, אביון, חלכאי, דלפון, מך, רש." },
      { "word": "דל אנפין", "interpretation": "זעיר." },
      { "word": "דלדול", "interpretation": "הפחתה בכמות או איכות של דבר." },
      { "word": "דלוח", "interpretation": "עכור, לא צלול." },
      { "word": "דלמטי", "interpretation": "סןג כלב אשר על פרוותו הלבנה נקודות שחורות." },
      { "word": "דלעיל", "interpretation": "שלמעלה, שנזכר קודם." },
      { "word": "דלפון", "interpretation": "עני, אביון, דל, מך, חסר כל." },
      { "word": "דמגוג", "interpretation": "בעל כושר שכנוע, רטוריקן." },
      { "word": "דמדום", "interpretation": "הזיה." },
      { "word": "דמדומים", "interpretation": "זמן השקיעה או הזריחה." },
      { "word": "דמו בראשו", "interpretation": "נושא באחריות על מעשיו." },
      { "word": "דמוגרפיה", "interpretation": "חקר הרכב האוכלוסיה והשתנותה." },
      { "word": "דמוני", "interpretation": "שטני." },
      { "word": "דמוקרטיה", "interpretation": "שלטון העם, השתתפות האזרח בקבלת החלטות." },
      { "word": "דמי", "interpretation": "שקט, דממה, דומייה." },
      { "word": "דמיון", "interpretation": "1. כמו, דומה למשהו; 2. הגיית דברים במחשבה אשר אינם קיימים במציאות." },
      { "word": "דמי לא יחרץ", "interpretation": "שוחד, שלמונים, בצע." },
      { "word": "דמי ימיו", "interpretation": "בצעירותו." },
      { "word": "דמים", "interpretation": "כסף." },
      { "word": "דמעות שליש", "interpretation": "בכי גדול." },
      { "word": "דמעות תנין", "interpretation": "בכי מתוך צביעות." },
      { "word": "דן ברותחין", "interpretation": "שפט בחומרה, בית שמאי." },
      { "word": "דנן", "interpretation": "זה, המדובר, הנזכר לעיל." },
      { "word": "דספוט", "interpretation": "רודן, עריץ, טירן, דיקטטור." },
      { "word": "דעיכה", "interpretation": "היחלשות, גוויעה, התנוונות." },
      { "word": "דעתו גסה עליו", "interpretation": "מתרברב." },
      { "word": "דעתו נוחה מ", "interpretation": "הוא מרוצה מ-." },
      { "word": "דעתן", "interpretation": "תקיף בדעתו, יודע מה הוא רוצה." },
      { "word": "דפוס", "interpretation": "תבנית, מסגרת, צורה קבועה." },
      { "word": "דפורמציה", "interpretation": "עיוות צורה." },
      { "word": "דפיטיזם", "interpretation": "תבוסתנות." },
      { "word": "דפיציט", "interpretation": "גרעון." },
      { "word": "דפנסיבה", "interpretation": "מגננה." },
      { "word": "דפתר", "interpretation": "פנקס, מחברת, קונטרס." },
      { "word": "דק", "interpretation": "עיין, בחן היטב, דקדק." },
      { "word": "דק גו", "interpretation": "רזה, כחוש, צנום." },
      { "word": "דקדוקי עניות", "interpretation": "דיוק מופרז, נוקדנות." },
      { "word": "דקדנס", "interpretation": "ירידה, שקיעה, התנוונות." },
      { "word": "דקדקן", "interpretation": "מקפיד על כל פרט באופן מוגזם." },
      { "word": "דר", "interpretation": "גר." },
      { "word": "דראון", "interpretation": "בושה, חרפה, כלימה." },
      { "word": "דראון עולם", "interpretation": "חרפה נצחית, אות קין." },
      { "word": "דרג", "interpretation": "שלב, דרגה." },
      { "word": "דרגנוע", "interpretation": "מדרגות נעות." },
      { "word": "דרגש", "interpretation": "כיסא נמוך, הדום, שרפרף." },
      { "word": "דרדרסים", "interpretation": "נעלי בית, אנפילאות." },
      { "word": "דרדק", "interpretation": "ילד, זאטוט, ינוקא, עולל." },
      { "word": "דרדר", "interpretation": "סוג של קוץ, חרול, חוח." },
      { "word": "דריכות", "interpretation": "מתיחות." },
      { "word": "דריסת רגל", "interpretation": "עמדה, מאחז." },
      { "word": "דרך", "interpretation": "מתח." },
      { "word": "דרך ארץ", "interpretation": "נימוסים, התנהגות נאותה." },
      { "word": "דרך הישר", "interpretation": "התנהגות טובה ונאה." },
      { "word": "דרך המלך", "interpretation": "הדרך הראשית." },
      { "word": "דרך חתחתים", "interpretation": "דרך לא סלולה, מלאה במכשולים." },
      { "word": "דרך כוכבו", "interpretation": "הצליח." },
      { "word": "דרסטי", "interpretation": "תקיף, נמרץ, קיצוני." },
      { "word": "דרקוני", "interpretation": "קשה ביותר." },
      { "word": "דרש", "interpretation": "פירש, ביאר." },
      { "word": "דרשה", "interpretation": "הרצאה שעיקרה פרשנות של טקסט." },
      { "word": "דש", "interpretation": "1. רמס, דרס; 2. קפל בבגד." },
      { "word": "דשדש", "interpretation": "צעד במקום, בוסס, הידס, דידה." },
      { "word": "דשן", "interpretation": "שמן, שופע." }
    ];

    $scope.currentLetter = "ד'";
    $scope.currentWordIndex = 0
    $scope.progressPrecentes = function() {
      return $scope.currentWordIndex / ($scope.words.length - 1) * 100
    };

    $scope.nextWord = function() {
      $scope.showInterpretation = false;
      if (!$scope.isNextDisabled()) {
        $scope.currentWordIndex += 1;
      };
    };

    $scope.previousWord = function() {
      $scope.showInterpretation = false;
      if (!$scope.isPreviousDisabled()) {
        $scope.currentWordIndex -= 1;
      };
    };

    $scope.isNextDisabled = function() {
      return $scope.currentWordIndex == $scope.words.length - 1
    };

    $scope.isPreviousDisabled = function() {
      return $scope.currentWordIndex == 0
    }
  });
