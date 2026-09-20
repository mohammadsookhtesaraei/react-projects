

function convertTime(seconds:number) {
    // تعداد دقیقه ها رو حساب میکنه
  const minutes = Math.floor(seconds / 60);

//   تعداد ثاینه
  const remainingSeconds = seconds % 60;

//   در اخرم تبدیل میشه به تایمو پد استارت میگه طول ثانیه باید 2 باشه اگه نیست قبلش یک صفر بذار
  return `${String(minutes).padStart(2,"0")}:${String(remainingSeconds).padStart(2, '0')}`;
};


export {convertTime}