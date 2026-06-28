
// שומרים את האלמנטים במשתנים בעזרת getElementById הפשוט
const nameInput = document.getElementById('userName');
const submitBtn = document.getElementById('submitBtn');
const productImg = document.getElementById('productImage');

const radioIphone = document.getElementById('radioIphone');
const radioSamsung = document.getElementById('radioSamsung');

const addonCleaning = document.getElementById('addonCleaning');
const addonAntiGlare = document.getElementById('addonAntiGlare');

function updatePreview() {
    let isDeviceSelected = false;
    let selectedDeviceValue = "";

    // בודקים איזה מכשיר נבחר עם if/else פשוט
    if (radioIphone.checked) {
        isDeviceSelected = true;
        selectedDeviceValue = radioIphone.value;
    } else if (radioSamsung.checked) {
        isDeviceSelected = true;
        selectedDeviceValue = radioSamsung.value;
    }

    // בודקים אם סומנה לפחות תוספת אחת
    let isAnyAddonChecked = false;
    if (addonCleaning.checked || addonAntiGlare.checked) {
        isAnyAddonChecked = true;
    }

    // 1. לוגיקת תמונה
    if (isDeviceSelected) {
        productImg.style.display = 'block';
        productImg.src = 'images/' + selectedDeviceValue + '_glass.png';
    } else {
        productImg.style.display = 'none';
    }

    // 2. לוגיקת שקיפות
    if (isAnyAddonChecked) {
        productImg.style.opacity = '1';
    } else {
        productImg.style.opacity = '0.5';
    }

    // 3. פתיחת הכפתור
    let isNameFilled = false;
    if (nameInput.value !== "") {
        isNameFilled = true;
    }

    // פותחים את הכפתור רק אם כל שלושת התנאים מתקיימים
    if (isNameFilled && isDeviceSelected && isAnyAddonChecked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function showSummary() {
    const name = nameInput.value;

    let deviceName = "";
    if (radioIphone.checked) {
        deviceName = "iPhone";
    } else if (radioSamsung.checked) {
        deviceName = "Samsung";
    }

    // מערך פשוט ששומר את התוספות בעזרת מונה אינדקס (במקום push)
    const addonsArray = [];
    let addonIndex = 0; // משתנה שסופר באיזה תא אנחנו נמצאים במערך

    if (addonCleaning.checked) {
        addonsArray[addonIndex] = addonCleaning.value; // מציבים בתא הנוכחי
        addonIndex++; // מקדמים את המונה לתא הבא
    }
    if (addonAntiGlare.checked) {
        addonsArray[addonIndex] = addonAntiGlare.value;
        addonIndex++;
    }

    // הפיכת המערך למחרוזת טקסט בעזרת לולאת for קלאסית
    let addonsText = "None";
    if (addonsArray.length > 0) {
        addonsText = "";
        for (let i = 0; i < addonsArray.length; i++) {
            addonsText += addonsArray[i];
            // מוסיפים פסיק אחרי כל תוספת, חוץ מבאחרונה
            if (i < addonsArray.length - 1) {
                addonsText += ", ";
            }
        }
    }

    // שרשור מחרוזות בסיסי (עם +)
    const message = "Thank you, " + name + "!\n\n" +
        "Configuration Summary:\n" +
        "- Device: " + deviceName + "\n" +
        "- Add-ons: " + addonsText + "\n\n" +
        "Your order has been saved successfully.";

    alert(message);

    // איפוס
    document.getElementById('guardForm').reset();
    submitBtn.disabled = true;
    productImg.style.display = 'none';
}

// הוספת מאזיני אירועים לכל השדות
nameInput.addEventListener('input', updatePreview);
radioIphone.addEventListener('change', updatePreview);
radioSamsung.addEventListener('change', updatePreview);
addonCleaning.addEventListener('change', updatePreview);
addonAntiGlare.addEventListener('change', updatePreview);

// מאזין לכפתור השליחה
submitBtn.addEventListener('click', showSummary);