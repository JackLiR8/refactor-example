const sites = [
  {
    name: "Acme Boston",
    location: "Malden MA", // more site details
    customer: {
      name: "Acme Industries",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7, //more”
      }, // more
    },
  },
  {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    // more site details
    customer: "unknown",
  },
];

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
    name: "occupant",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: { weeksDelinquentInLastYear: 0 },
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer) {
  if (aCustomer === "unknown") return true;
  else return aCustomer.isUnknown;
}

// 客户端1...
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;

// 客户端2...
const plan = aCustomer.billingPlan;

// 客户端3...
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
