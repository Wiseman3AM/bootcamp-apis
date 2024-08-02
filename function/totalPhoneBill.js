function totalPhoneBill(usage){
  const callCost = 2.75;
  const smsCost = 0.65;
  const dataCost = 5.00;
  
  let usageAnt = usage.split(/\s*,\s*/); // This will split by comma and ignore spaces

  
  let callCount = 0;
  let smsCount = 0;
  let dataCount = 0;
  
  for (const comm of usageAnt) {
    if (comm.trim() === 'call'){
      callCount++;
    } else if (comm.trim() === 'sms'){
      smsCount++;
    }
  }
  const totalBill = (callCount * callCost) + (smsCost * smsCount) + + (dataCost * dataCount);
  return `R${totalBill.toFixed(2)}`
  }

  export default totalPhoneBill