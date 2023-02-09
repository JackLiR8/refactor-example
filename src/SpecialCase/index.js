class Site {
  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : this._customer;
  }
}

class Customer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return "occupant";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(arg) {}

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// function isUnknown(arg) {
//   if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
//     throw new Error(`investigate bad value: <${arg}>`);
//   return arg.isUnknown;
// }

// 客户端1...
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;

// 客户端2...
// const plan = isUnknown(aCustomer)
//   ? registry.billingPlans.basic
//   : aCustomer.billingPlan;
const plan = aCustomer.billingPlan;

// 客户端3...
// if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
aCustomer.billingPlan = newPlan;

// 客户端4...
// const weeksDelinquent = isUnknown(aCustomer)
//   ? 0
//   : aCustomer.paymentHistory.weeksDelinquentInLastYear;
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// const name = !isUnknown(aCustomer) ? aCustomer.name : "unknown occupant";
const name = aCustomer.isUnknown ? "unknown occupant" : aCustomer.name;
