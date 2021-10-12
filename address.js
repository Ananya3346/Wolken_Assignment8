function FillBilling(f) {
    if(f.billingtoo.checked == true) {
      f.billingname.value = f.shippingname.value;
    }
  }