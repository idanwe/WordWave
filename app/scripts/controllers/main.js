'use strict';

angular.module('WordWaveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.words = [
      { "word": "אבד עליו הכלח", "interpretation": "התיישן, עבר זמנו, אנכרוניסטי." },
      { "word": "אבדון", "interpretation": "חורבן, כליה, כליון, הרס גמור." },
      { "word": "אבוס", "interpretation": "כלי לנתינת אוכל לבהמות." },
      { "word": "אבוקה", "interpretation": "לפיד, משואה." },
      { "word": "אבות אכלו בוסר ושיני בנים תקהינה", "interpretation": "בנים נענשים בגלל חטאי הוריהם." },
      { "word": "אבחה", "interpretation": "1. תנופה 2. טבח, חורבן." },
      { "word": "אבטיפוס", "interpretation": "מקור." },
      { "word": "אבן הראשה", "interpretation": "האבן האמצעית בקשת בניין." },
      { "word": "אבן יסוד", "interpretation": "מרכיב חיוני, עליו מבוסס דבר מה." },
      { "word": "אבן נגולה מעל ליבו", "interpretation": "הוקל לו, רווח לו." },
      { "word": "אבן נגף", "interpretation": "מכשול, תקלה, מהמורה, פח." },
      { "word": "אבן פינה", "interpretation": "עיקר." },
      { "word": "אבן ריחיים", "interpretation": "עול כבד." },
      { "word": "אבן שואבת", "interpretation": "דבר שהוא מוקד התעניינות." },
      { "word": "אבן שפה", "interpretation": "האבנים שבשולי הכביש, תחילת המדרכה." },
      { "word": "אבניים", "interpretation": "גלגל ליצירת כלי חרס." },
      { "word": "אבסולוטי", "interpretation": "מוחלט." },
      { "word": "אבק אדם", "interpretation": "אדם נטול ערך." },
      { "word": "אבק פורח", "interpretation": "דבר נטול כל ערך." },
      { "word": "אברך", "interpretation": "איש צעיר, נשוי בשנותיו הראשונות." },
      { "word": "אגב", "interpretation": "בהזדמנות זו, תוך כדי כך, אגב אורחא." },
      { "word": "אגד", "interpretation": "חבילה, צרור, אמתחת, ציקלון." },
      { "word": "אגוז קשה לפיצוח", "interpretation": "בעיה שקשה לפתור אותה." },
      { "word": "אגליטרי", "interpretation": "שוויוני." },
      { "word": "אגן", "interpretation": "ספל, קערה, בזיך, קובעת." },
      { "word": "אגרונום", "interpretation": "מומחה בתחום החקלאות." },
      { "word": "אגרסיבי", "interpretation": "תוקפני." },
      { "word": "אד הוק", "interpretation": "ייעודי, במיוחד לשם תכלית מסוימת." },
      { "word": "אדווה", "interpretation": "גל קטן." },
      { "word": "אדם מן הישוב", "interpretation": "אדם מתורבת." },
      { "word": "אדמת טרשים", "interpretation": "אדמה סלעית, שאינה ניתנת לעיבוד." },
      { "word": "אדמת שלחין", "interpretation": "קרקע חקלאית בהשקיה מלאכותית." },
      { "word": "אדן", "interpretation": "בסיס, יסוד (צירוף מוכר: אדן החלון)." },
      { "word": "אדנות", "interpretation": "שלטון, שררה, עצר, מרות." },
      { "word": "אדרבה ואדרבה", "interpretation": "ההפך הוא הנכון." },
      { "word": "אהבה התלויה בדבר", "interpretation": "אהבה מתוך מניעים אישיים." },
      { "word": "אהדדי", "interpretation": "באופן הדדי, זה לזה." },
      { "word": "אוב", "interpretation": "1. כלי עור לנוזלים, נאד, חמת 2. סיאנס, כישוף." },
      { "word": "אובד עצות", "interpretation": "מבולבל, נבוך, איבד את העשתונות." },
      { "word": "אובייקט", "interpretation": "עצם." },
      { "word": "אובייקטיבי", "interpretation": "ענייני, חסר העדפה אישית." },
      { "word": "אובליגטורי", "interpretation": "מחייב." },
      { "word": "אוגדן", "interpretation": "קלסר." },
      { "word": "אוד", "interpretation": "גזיר עץ בוער, שלא נשרף כולו." },
      { "word": "אוד מוצל מאש", "interpretation": "שריד, פליט." },
      { "word": "אוד עשן", "interpretation": "כינוי לאדם תשוש." },
      { "word": "אווילות", "interpretation": "טיפשות." },
      { "word": "אוונגרדי", "interpretation": "חדשני." },
      { "word": "אוזלת יד", "interpretation": "חוסר יכולת, אימפוטנציה, קוצר יד." },
      { "word": "אוזניים לכותל", "interpretation": "מצב שקשה לשמור בו סוד." },
      { "word": "אוטוביוגרפיה", "interpretation": "תולדות האדם, אותן כתב בעצמו." },
      { "word": "אוטודידקט", "interpretation": "לומד בעצמו." },
      { "word": "אוטוקרט", "interpretation": "שליט יחיד, טירן, דספוט, דיקטטור." },
      { "word": "אויל", "interpretation": "טיפש, סכל, שוטה, כסיל." },
      { "word": "אומדן", "interpretation": "הערכה, שומה." },
      { "word": "אומניפוטנט", "interpretation": "כל-יכול." },
      { "word": "אומר דרשני", "interpretation": "דורש עיון." },
      { "word": "און", "interpretation": "כוח, גבורה, איל, עזוז, מעוז." },
      { "word": "אונגרד", "interpretation": "חלוץ, חדשני." },
      { "word": "אוניברסלי", "interpretation": "עולמי, כללי." },
      { "word": "אוניפורמי", "interpretation": "בעל צורה אחידה." },
      { "word": "אונקיה", "interpretation": "מידת משקל קטנה." },
      { "word": "אופורטוניזם", "interpretation": "סתגלנות, פשרנות אידיאולוגית." },
      { "word": "אופורטוניסט", "interpretation": "מנצל הזדמנויות." },
      { "word": "אופטימלי", "interpretation": "מיטבי, הטוב ביותר." },
      { "word": "אופן", "interpretation": "גלגל." },
      { "word": "אוצר", "interpretation": "מי שממונה על המצגים במוזיאון." },
      { "word": "אוצר בלום", "interpretation": "1. אוצר גדול 2. אדם בעל ידיעות רחבות." },
      { "word": "אורבני", "interpretation": "עירוני." },
      { "word": "אור יקרות", "interpretation": "אור נעים." },
      { "word": "אורגניזם", "interpretation": "יצור חי." },
      { "word": "אורו עיניו", "interpretation": "אורו פניו, שמח, התמלא חיים." },
      { "word": "אורחה", "interpretation": "שיירה (המצויה בדרך)." },
      { "word": "אורחו וריבעו", "interpretation": "דרך חייו, מנהגיו." },
      { "word": "אורך רוח", "interpretation": "סבלנות." },
      { "word": "אורלוגין", "interpretation": "שעון קיר." },
      { "word": "77) אורקל", "interpretation": "מגיד עתידות." },
      { "word": "אורתודוכסי", "interpretation": "1. שמרן, פוריט 2. אדוק בדתו." },
      { "word": "אושיה", "interpretation": "1. איש ציבור, ידוען 2. משען, יסוד (נכתב גם \"אשיה\")" },
      { "word": "אותה הגברת בשינוי אדרת", "interpretation": "אותו הדבר, שינוי חיצוני לא מהותי." },
      { "word": "אותיות פורחות", "interpretation": "דיבור שאינו ברור." },
      { "word": "אות קין", "interpretation": "בושה שאין למחותה, אות קלון." },
      { "word": "אותיות של טל ומטר", "interpretation": "אותיות קטנות מאוד." },
      { "word": "אותיות של קידוש לבנה", "interpretation": "אותיות גדולות מאוד." },
      { "word": "אותנטי", "interpretation": "אמיתי, מקורי, לא מזויף." },
      { "word": "אזוב", "interpretation": "כינוי לטחב המכסה אבנים ועצים." },
      { "word": "אזוטרי", "interpretation": "ידוע למעטים, סודי." },
      { "word": "אזניו כרויות", "interpretation": "אוזניו פתוחות, הוא מקשיב היטב." },
      { "word": "אזניים לכותל", "interpretation": "המקום או המצב אינם מתאימים לחשוף בהם סוד." },
      { "word": "אזר חלציו", "interpretation": "התחזק, אזר כוח, שינס מותניו." },
      { "word": "אח", "interpretation": "תנור, קמין, כירה, כבשן." },
      { "word": "אחד בפה ואחד בלב", "interpretation": "צביעות, אין פיו ולבו שווים." },
      { "word": "אחו", "interpretation": "כר דשא, שדה מרעה, אפר." },
      { "word": "אחוז תזזית", "interpretation": "משוגע." },
      { "word": "אחז את החבל בשני קצותיו", "interpretation": "ביצע שני דברים מנוגדים." },
      { "word": "אחז את השור בקרניו", "interpretation": "נכנס ללב העניין, נכנס בעובי הקורה." },
      { "word": "אחז בקרנות המזבח", "interpretation": "תפס מחסה, ביקש מפלט." },
      { "word": "אחיזת עיניים", "interpretation": "תרמית, הולכת שולל." },
      { "word": "אחר רוחו", "interpretation": "כפי שרצה." },
      { "word": "אחרי המבול", "interpretation": "לא אכפת לי." },
      { "word": "אחרית", "interpretation": "סוף, קץ." },
      { "word": "אחריתו עדי עובד", "interpretation": "סופו רע ומר." },
      { "word": "אטב", "interpretation": "מהדק נייר או כביסה לחבל." },
      { "word": "אטרופיה", "interpretation": "התנוונות." },
      { "word": "איבד את העשתונות", "interpretation": "התבלבל, נבוך, אובד עצות." },
      { "word": "איד", "interpretation": "צרה, אסון, שבר, פיד." },
      { "word": "אידיליה", "interpretation": "שלווה, הרמוניה, פסטורליה." },
      { "word": "אידרה", "interpretation": "עצם של דג." },
      { "word": "איוולת", "interpretation": "שטות." },
      { "word": "איוושה", "interpretation": "רחש קל." },
      { "word": "איחוי", "interpretation": "חיבור, תפירה." },
      { "word": "איטר", "interpretation": "שמאלי." },
      { "word": "איכה?", "interpretation": "איך? הכיצד?" },
      { "word": "איכול", "interpretation": "בעירה, שריפה." },
      { "word": "איל", "interpretation": "כוח, תעצומה, גבורה, עוז, חוסן, חיל." },
      { "word": "אילוח", "interpretation": "זיהום, אינפקציה." },
      { "word": "אילולא", "interpretation": "אם לא, אילו לא, לולא, אלמלא." },
      { "word": "אילוסטרציה", "interpretation": "1. איור 2. הדגמה, המחשה." },
      { "word": "אילני סרק קולם הולך", "interpretation": "טיפש המרבה להתרברב." },
      { "word": "אלפס", "interpretation": "סיר, מרחשת, קלחת, קדרה, פרור." },
      { "word": "אימום", "interpretation": "תבנית של כף הרגל." },
      { "word": "אימפולסיבי", "interpretation": "מונע על-ידי דחפים." },
      { "word": "אימפרוביזציה", "interpretation": "אלתור." },
      { "word": "אימץ את ידיו", "interpretation": "עודד אותו, דרבן אותו." },
      { "word": "אימרה", "interpretation": "1. פתגם, מטבע לשון, מימרה ;2. שולי האריג." },
      { "word": "אימתי", "interpretation": "מתי." },
      { "word": "אין אונים", "interpretation": "חוסר יכולת, אוזלת יד, קוצר יד." },
      { "word": "אין את נפשו", "interpretation": "אינו רוצה." },
      { "word": "אין בלבו עליו", "interpretation": "אינו כועס עליו." },
      { "word": "אין הנחתום מעיד על עיסתו", "interpretation": "אדם לא יכול לחוות דעה על מעשיו שלו." },
      { "word": "אין הריחיים בצווארו", "interpretation": "אין לו בעיות פרנסה." },
      { "word": "אין כוחו אלא בפיו", "interpretation": "פטפטן, שמבטיח רבות ואינו מקיים." },
      { "word": "אין לו אח ורע", "interpretation": "אין כמותו." },
      { "word": "אין לו דמים", "interpretation": "יקר ערך." },
      { "word": "אין לו חלק ונחלה", "interpretation": "אין לו קשר." },
      { "word": "אין לו חקר", "interpretation": "לא ניתן להערכה." },
      { "word": "אין לו שחר", "interpretation": "לא מבוסס." },
      { "word": "אין מנוס", "interpretation": "אין ברירה." },
      { "word": "אין נביא בעירו", "interpretation": "אדם אינו זוכה להערכה בסביבתו." },
      { "word": "אין סכין מתחדדת אלא בירך חברתה", "interpretation": "לימוד בצוותא משפר את הלמידה." },
      { "word": "אין סתרו כגילויו", "interpretation": "צבוע, אין פיו ולבו שווים." },
      { "word": "אין עליו עוררין", "interpretation": "אין התנגדות,, התפרץ לדלת פתוחה, לית מאן דפליג." },
      { "word": "אין עשן בלא אש", "interpretation": "אין דבר ללא סיבה." },
      { "word": "אין פיו ולבו שווים", "interpretation": "צבוע, אין סתרו כגילויו." },
      { "word": "אין תוכו כברו", "interpretation": "צבוע, אחד בפה ואחד בלב." },
      { "word": "אינדוקציה", "interpretation": "לימוד מהפרט אל הכלל." },
      { "word": "אינדיקטור", "interpretation": "מדד, אבן בוחן, אמת מידה." },
      { "word": "אינהרנטי", "interpretation": "פנימי, טבוע." },
      { "word": "אינטגרלי", "interpretation": "כולל, שלם." },
      { "word": "אינטראקציה", "interpretation": "יחסי גומלין." },
      { "word": "אינטרוברטי", "interpretation": "מופנם." },
      { "word": "אינספירציה", "interpretation": "השראה." },
      { "word": "אינפנטילי", "interpretation": "ילדותי." },
      { "word": "אינקוגניטו", "interpretation": "בעילום שם, אנונימי, אלמוני." },
      { "word": "אינרציה", "interpretation": "1. שגרה 2. התמדה." },
      { "word": "איסטניס", "interpretation": "אנין, מעודן, יפה נפש." },
      { "word": "איסתרא בלגינא קיש קיש קריא", "interpretation": "טיפש המרבה להתרברב, אילני סרק קולם הולך." },
      { "word": "איפה", "interpretation": "מידה עתיקה." },
      { "word": "איפה ואיפה", "interpretation": "אפליה, משוא פנים." },
      { "word": "איפול", "interpretation": "הטלת סודיות." },
      { "word": "איפכא מסתברא", "interpretation": "להפך, ההפך הוא הנכון." },
      { "word": "איצטבה", "interpretation": "מדף." },
      { "word": "איצטגנין", "interpretation": "אסטרולוג." },
      { "word": "איצטלה", "interpretation": "מסווה." },
      { "word": "איקונין", "interpretation": "תמונה, דמות." },
      { "word": "איש אשכולות", "interpretation": "בקי בנושאים רבים, ורסטילי." },
      { "word": "איש הישר בעיניו יעשה", "interpretation": "מצב של אנרכיה, ללא שלטון מרכזי." },
      { "word": "איש חיל", "interpretation": "גיבור או אדם מצליח." },
      { "word": "איש חרמו", "interpretation": "אויבו." },
      { "word": "איש מדון", "interpretation": "בעל נטייה לריב." },
      { "word": "איש מידות", "interpretation": "גבוה." },
      { "word": "איש צפרדע", "interpretation": "צוללן, אמודאי." },
      { "word": "אישקוקה", "interpretation": "שחמט." },
      { "word": "איש קצוות", "interpretation": "קיצוני." },
      { "word": "איש שם", "interpretation": "מפורסם." },
      { "word": "אישוש", "interpretation": "ביסוס, אישור מחדש, חיזוק (של טענה)." },
      { "word": "אישרור", "interpretation": "אישור סופי." },
      { "word": "איתן", "interpretation": "יציב, חזק, שגיב." },
      { "word": "איתרע מזלו", "interpretation": "הדברים היו לרעתו, ביש מזל." },
      { "word": "אכיפה", "interpretation": "כפייה." },
      { "word": "אכל קורצה", "interpretation": "הלשין." },
      { "word": "אכסדרה", "interpretation": "מסדרון, פרוזדור." },
      { "word": "אכסיומה", "interpretation": "הנחת יסוד שלא ניתן להוכיחה, אמיתה." },
      { "word": "אכף", "interpretation": "לחץ, נטל, מעמסה." },
      { "word": "אכרומטי", "interpretation": "חסר צבע." },
      { "word": "אל יתהלל חוגר כמפתח", "interpretation": "אל תתפאר לפני מעשה." },
      { "word": "אל נא באפך", "interpretation": "אל תכעס." },
      { "word": "אל נכון", "interpretation": "בוודאות, ללא ספק, לבטח." },
      { "word": "אל תסתכל בקנקן אלא במה שיש בתוכו", "interpretation": "הפנים חשוב יותר מהחיצוניות, לא כל הנוצץ זהב הוא." },
      { "word": "אל תעמדו על דם רעיכם", "interpretation": "חושו לעזרת חבריכם." },
      { "word": "אלגוריה", "interpretation": "משל." },
      { "word": "אלה", "interpretation": "מקל, נבוט." },
      { "word": "אלה", "interpretation": "1. שבועה חמורה;2. קללה, קילוס." },
      { "word": "אלומה", "interpretation": "אגודת שיבולים, עומר, עמיר." },
      { "word": "אלחוש", "interpretation": "הרדמה." },
      { "word": "אלטרואיזם", "interpretation": "אהבת הזולת, הקרבה למען אחרים, זולתנות." },
      { "word": "אלטרנטיבי", "interpretation": "חלופי." },
      { "word": "אליבא דכלא עלמא", "interpretation": "לפי דעת הכלל." },
      { "word": "אליבי", "interpretation": "טענת הנאשם כי בעת ביצוע הפשע לא היה במקום המעשה" },
      { "word": "אליה", "interpretation": "זנב הכבשה." },
      { "word": "אליה וקוץ בה", "interpretation": "גם בדבר טוב יש פגמים." },
      { "word": "אלם", "interpretation": "שתיקה." },
      { "word": "אלמותי", "interpretation": "נצחי." },
      { "word": "אלמלא", "interpretation": "אם לא, אילו לא, אילולא." },
      { "word": "אלמנך", "interpretation": "לוח המציג את עונות השנה." },
      { "word": "אלסטי", "interpretation": "גמיש." },
      { "word": "אלף", "interpretation": "שור, פר." },
      { "word": "אלפון", "interpretation": "ספר שבו הפרטים מסודרים על-פי סדר הא\"ב." },
      { "word": "אם בארזים נפלה שלהבת, מה יגידו אזובי הקיר?", "interpretation": "אם הגדולים נפלו בצרה, איך ימלטו ממנה החלשים?" },
      { "word": "אמביולנטי", "interpretation": "דו-ערכי, שיש בו רגשות מעורבים." },
      { "word": "אמבר", "interpretation": "מחסן תבואה, אסם, ממגורה." },
      { "word": "אמברגו", "interpretation": "הסגר, איסור על הוצאה והבאה של דברים מסוימים למקום מסוים." },
      { "word": "אמד", "interpretation": "העריך, שיער גודל או טיב של משהו." },
      { "word": "אמה", "interpretation": "1. מידת אורך;2. האצבע האמצעית ביד, אצבע צרדה." },
      { "word": "אמה", "interpretation": "משרתת, שפחה." },
      { "word": "אמודאי", "interpretation": "צוללן, איש צפרדע." },
      { "word": "אמון", "interpretation": "מיומן." },
      { "word": "אמוק", "interpretation": "טירוף, בלבול, תעתועים, עוועים." },
      { "word": "אמות הסיפים", "interpretation": "העמודים, התומכים פתח או מבנה מצדדיו." },
      { "word": "אמורפי", "interpretation": "חסר צורה." },
      { "word": "אמיד", "interpretation": "עשיר." },
      { "word": "אמיר", "interpretation": "צמרת." },
      { "word": "אמפיבי", "interpretation": "דו חיים, יצור המסוגל להתקיים הן במים והן ביבשה." },
      { "word": "אמפתיה", "interpretation": "אהדה, הזדהות." },
      { "word": "אמרה", "interpretation": "1. משפט קצר, פתגם;2. שפת הבד." },
      { "word": "אמש", "interpretation": "1. בלילה שעבר 2.אתמול." },
      { "word": "אמתחת", "interpretation": "שק גדול, תרמיל, צקלון, צרור, אגד." },
      { "word": "אמתלה", "interpretation": "תירוץ, עילה, תואנה, גנות." },
      { "word": "אמת מידה", "interpretation": "קנה מידה, קריטריון." },
      { "word": "אנדרטה", "interpretation": "מצבת זיכרון, יד, גלעד." },
      { "word": "אנונימי", "interpretation": "בעילום שם, אלמוני, אינקוגניטו." },
      { "word": "אנוף", "interpretation": "נזוף." },
      { "word": "אנוש", "interpretation": "חמור מאוד, עלול לגרום למוות." },
      { "word": "אנטגוניזם", "interpretation": "התנגדות, ניגוד חריף." },
      { "word": "אנטומיה", "interpretation": "חקר מבנה גוף החי והצומח." },
      { "word": "אנטיספטי", "interpretation": "סטרילי." },
      { "word": "אנטיתזה", "interpretation": "הנחה סותרת." },
      { "word": "אני ואפסי עוד", "interpretation": "הבעת יהירות, אגוצנטרי." },
      { "word": "אניגמה", "interpretation": "תעלומה, מסתורין." },
      { "word": "אניגמטי", "interpretation": "חידתי." },
      { "word": "אניה", "interpretation": "בכי, מספד, תאניה." },
      { "word": "אנין", "interpretation": "עדין, בעל טעם מעודן, איסטניס." },
      { "word": "אנכרוניסטי", "interpretation": "התיישן, עבר זמנו." },
      { "word": "אנליטי", "interpretation": "ביקורתי, המפריד דבר לחלקיו." },
      { "word": "אנסמבל", "interpretation": "להקת שחקנים או מוסיקאים." },
      { "word": "אנקה", "interpretation": "גניחה, צעקה מתוך כאב או צער." },
      { "word": "אנפילאות", "interpretation": "נעלי בית, דרדסים." },
      { "word": "אנקדוטה", "interpretation": "בדיחה, הלצה." },
      { "word": "אנרכיה", "interpretation": "העדר שלטון, אנדרלמוסיה." },
      { "word": "אנרכיזם", "interpretation": "שלילת כל שלטון." },
      { "word": "אנשי שלומו", "interpretation": "תומכיו." },
      { "word": "אנתרופולוגיה", "interpretation": "חקר התפתחות האדם." },
      { "word": "אסדה", "interpretation": "רפסודה, דוברה, ארבה, בוצית." },
      { "word": "אסוך", "interpretation": "כד לשמן." },
      { "word": "אסופה", "interpretation": "קובץ מאמרים, אנתולוגיה." },
      { "word": "אסופי", "interpretation": "ילד שנאסף מן הרחוב." },
      { "word": "אסטרונומי", "interpretation": "גדול מאוד, עצום." },
      { "word": "אסימילציה", "interpretation": "הטמעה, הידמות, התבוללות." },
      { "word": "אסכולה", "interpretation": "1. שיטה, דיסציפלינה, דוקטרינה;2. קבוצה הדוגלת ברעיון מסוים." },
      { "word": "אסכלה", "interpretation": "1. סולם מדרגות, כבש 2. גריל." },
      { "word": "אסם", "interpretation": "מחסן תבואה, ממגורה, אמבר." },
      { "word": "אסמכתא", "interpretation": "מקור שאפשר להסתמך עליו." },
      { "word": "אספלנית", "interpretation": "פלסטר, תחבושת." },
      { "word": "אספקלריה", "interpretation": "ראי." },
      { "word": "אסקופה", "interpretation": "סף." },
      { "word": "אסר מלחמה", "interpretation": "פתח בקרב." },
      { "word": "אסרטיבי", "interpretation": "בטוח בעצמו, עומד על שלו." },
      { "word": "אף", "interpretation": "כעס." },
      { "word": "אפודה", "interpretation": "מיזע, סווטשרט." },
      { "word": "אפוטרופוס", "interpretation": "ממונה לטיפול בקטין, פטרון." },
      { "word": "אפולוגטיקה", "interpretation": "הצטדקות." },
      { "word": "אפוסטריורי", "interpretation": "למפרע, על מה שכבר נעשה, בדיעבד, מראש." },
      { "word": "אפוף", "interpretation": "עטוף, מוקף במשהו." },
      { "word": "אפוקליפסה", "interpretation": "חזון אחרית הימים." },
      { "word": "אפיזודה", "interpretation": "מקרה, מאורע בודד." },
      { "word": "אפיל", "interpretation": "איחר להבשיל." },
      { "word": "אפילוג", "interpretation": "אחרית דבר, סיום." },
      { "word": "אפיפית", "interpretation": "ופל, ביסקויט, תופין, רקיק, פכסם." },
      { "word": "אפיקורוס", "interpretation": "כופר בדת, מין, אתיאיסט." },
      { "word": "אפיקורסות", "interpretation": "כפירה." },
      { "word": "אפיריון", "interpretation": "מושב שמעליו חופה לנשיאת אנשים." },
      { "word": "אפס קצהו", "interpretation": "רק קצת ממנו." },
      { "word": "אפקט", "interpretation": "השפעה." },
      { "word": "אפרופו", "interpretation": "אגב." },
      { "word": "אפריורי", "interpretation": "מראש, מלכתחילה, למפרע." },
      { "word": "אפרכסת", "interpretation": "1. אזנית הטלפון;2. חלקה החיצוני של האוזן." },
      { "word": "אפרקדן", "interpretation": "שוכב על הגב, פרקדן." },
      { "word": "אץ", "interpretation": "רץ, נחפז, ממהר." },
      { "word": "אצבע צרדה", "interpretation": "אמה, האצבע האמצעית." },
      { "word": "אצבעון", "interpretation": "כיפת מתכת ששמים על האצבע בשעת התפירה." },
      { "word": "אצטלה", "interpretation": "גלימת אדם מכובד." },
      { "word": "אצעדה", "interpretation": "צמיד, עדי, משכית." },
      { "word": "אצר", "interpretation": "אסף, אגר, צבר." },
      { "word": "אקוטי", "interpretation": "1. חד;  2. חריף, חמור." },
      { "word": "אקונומי", "interpretation": "חסכני." },
      { "word": "אקזוטי", "interpretation": "יוצא דופן, מרתק עקב זרותו." },
      { "word": "אקלקטי", "interpretation": "מלוקט, מקובץ ממקורות שונים." },
      { "word": "אקסיומה", "interpretation": "הנחה שאין עליה ערעור." },
      { "word": "אקסצנטרי", "interpretation": "חריג, מוזר, תמהוני, ביזארי." },
      { "word": "אקרן", "interpretation": "מסך, מרקע, בד." },
      { "word": "אראל", "interpretation": "מלאך, כרוב, שרף." },
      { "word": "ארגומנט", "interpretation": "טיעון." },
      { "word": "ארוגני", "interpretation": "אזור רגיש לגירוי מיני." },
      { "word": "ארבה", "interpretation": "סירה שטוחה, רפסודה." },
      { "word": "ארוגנטי", "interpretation": "רברבן." },
      { "word": "ארוזיה", "interpretation": "שחיקה." },
      { "word": "ארוכה", "interpretation": "1. גלד של פצע 2. רפואה." },
      { "word": "ארומה", "interpretation": "ריח נעים, ניחוח." },
      { "word": "ארחי פרחי", "interpretation": "1. בטלנים, ריקים 2. נודדים." },
      { "word": "אריה", "interpretation": "קטיפה, איסוף (בעיקר תאנים ודבש)." },
      { "word": "אריח", "interpretation": "מרצפת." },
      { "word": "אריסטוקרט", "interpretation": "אציל, שוע, בעל בעמיו, מרקיז." },
      { "word": "ארכאי", "interpretation": "עתיק, מיושן." },
      { "word": "ארך אפיים", "interpretation": "סבלן, מתאפק מלכעוס." },
      { "word": "ארכובה", "interpretation": "1. ברך 2. דבר כפוף כברך." },
      { "word": "ארכוף", "interpretation": "טבעת בצד האוכף, שבה שם הרוכב את כף רגלו, משוורת." },
      { "word": "ארכיב", "interpretation": "ארכיון, גנזך." },
      { "word": "ארכיבישוף", "interpretation": "דרגת כמורה גבוהה." },
      { "word": "ארכיפלג", "interpretation": "קבוצת איים." },
      { "word": "ארעי", "interpretation": "זמני, קיקיוני, אקראי, בר-חלוף." },
      { "word": "ארץ גזרה", "interpretation": "1. ארץ רחוקה ונידחת 2. מושבת עונשין." },
      { "word": "ארצי", "interpretation": "חומרי, גופני, פיזי, גשמי." },
      { "word": "ארר", "interpretation": "קילל, חירף, גידף, גינה, ניאץ." },
      { "word": "אשמאי", "interpretation": "חוטא ; בביטוי: אשמאי זקן (חוטא זקן)." },
      { "word": "אשמורת", "interpretation": "חלק מהלילה (לרוב שליש)." },
      { "word": "אשפה", "interpretation": "נרתיק לחצים, תלי." },
      { "word": "אשפרה", "interpretation": "גימור האריג." },
      { "word": "אתיאיזם", "interpretation": "כפירה באל, מינות, אפיקורסות." },
      { "word": "אתיקה", "interpretation": "תורת המוסר." },
      { "word": "אתנחתא", "interpretation": "הפסקה. "}
    ];

    $scope.currentLetter = "א'";
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
