function totalCallBill(usage) {
    const callCost = 2.75;


    let usageAnt = usage.split(/\s*,\s*/);
  
    let callCount = 0;
  

    for (const comm of usageAnt) {
      if (comm.trim() === 'call') {
        callCount++;
      } 
    }
  
    const callBill = callCost * callCount;
  
    return {
      totalBill: `R${callBill.toFixed(2)}`,
      callCount: callCount
    };
  }
  
  
  export default totalCallBill;
