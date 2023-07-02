/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEstimatorSpecificationChainlink = /* GraphQL */ `
  mutation CreateEstimatorSpecificationChainlink(
    $data: EstimatorSpecificationChainlinkCreateInput!
  ) {
    createEstimatorSpecificationChainlink(data: $data) {
      estimatorId
      transactionId
      class
      color
      height
      gauge
      mesh
      selvage
      chainlinkId
      topRailType
      midRailCount
      bottomRailType
      braceRailBool
      trussRodsBool
      terminalPostDiameter
      terminalPostGauge
      terminalPostId
      terminalPostLength
      linePostDiameter
      linePostGauge
      linePostId
      linePostLength
      railPipeDiameter
      railPipeGauge
      railPipeId
      railPipeLength
      maxSectionSpacingFeet
      platedPostsBool
      barbwireBool
      razorBool
      tensionwireId
      hogRingsId
      tiesPerRail
      tiesPerRailLine
      tensionBandPerHookup
      braceBandPerHookup
      barbarmId
      barbwireId
      baseId
      boltId
      concreteId
      linetieId
      loopId
      railEndId
      railTieId
      razorId
      tensionBarId
      terminalBraceId
      terminalCapId
      ternminalTensionId
      trussRodId
      dateCreated
      dateUpdated
    }
  }
`;
export const updateEstimatorSpecificationChainlink = /* GraphQL */ `
  mutation UpdateEstimatorSpecificationChainlink(
    $where: EstimatorSpecificationChainlinkWhereInput!
    $data: EstimatorSpecificationChainlinkUpdateInput
  ) {
    updateEstimatorSpecificationChainlink(where: $where, data: $data) {
      estimatorId
      transactionId
      class
      color
      height
      gauge
      mesh
      selvage
      chainlinkId
      topRailType
      midRailCount
      bottomRailType
      braceRailBool
      trussRodsBool
      terminalPostDiameter
      terminalPostGauge
      terminalPostId
      terminalPostLength
      linePostDiameter
      linePostGauge
      linePostId
      linePostLength
      railPipeDiameter
      railPipeGauge
      railPipeId
      railPipeLength
      maxSectionSpacingFeet
      platedPostsBool
      barbwireBool
      razorBool
      tensionwireId
      hogRingsId
      tiesPerRail
      tiesPerRailLine
      tensionBandPerHookup
      braceBandPerHookup
      barbarmId
      barbwireId
      baseId
      boltId
      concreteId
      linetieId
      loopId
      railEndId
      railTieId
      razorId
      tensionBarId
      terminalBraceId
      terminalCapId
      ternminalTensionId
      trussRodId
      dateCreated
      dateUpdated
    }
  }
`;
export const deleteEstimatorSpecificationChainlink = /* GraphQL */ `
  mutation DeleteEstimatorSpecificationChainlink(
    $where: EstimatorSpecificationChainlinkWhereInput!
  ) {
    deleteEstimatorSpecificationChainlink(where: $where) {
      estimatorId
      transactionId
      class
      color
      height
      gauge
      mesh
      selvage
      chainlinkId
      topRailType
      midRailCount
      bottomRailType
      braceRailBool
      trussRodsBool
      terminalPostDiameter
      terminalPostGauge
      terminalPostId
      terminalPostLength
      linePostDiameter
      linePostGauge
      linePostId
      linePostLength
      railPipeDiameter
      railPipeGauge
      railPipeId
      railPipeLength
      maxSectionSpacingFeet
      platedPostsBool
      barbwireBool
      razorBool
      tensionwireId
      hogRingsId
      tiesPerRail
      tiesPerRailLine
      tensionBandPerHookup
      braceBandPerHookup
      barbarmId
      barbwireId
      baseId
      boltId
      concreteId
      linetieId
      loopId
      railEndId
      railTieId
      razorId
      tensionBarId
      terminalBraceId
      terminalCapId
      ternminalTensionId
      trussRodId
      dateCreated
      dateUpdated
    }
  }
`;
export const createContract = /* GraphQL */ `
  mutation CreateContract($data: ContractCreateInput!) {
    createContract(data: $data) {
      contractId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      contractDate
      projectName
      priceLevel
      status
      convertedDate
      totalJobCost
      totalHours
      totalContractCosts
      totalContractProfit
      totalContingency
      totalContractPrice
      source
      finalized
      finalizedDate
    }
  }
`;
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $where: ContractWhereInput!
    $data: ContractUpdateInput
  ) {
    updateContract(where: $where, data: $data) {
      contractId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      contractDate
      projectName
      priceLevel
      status
      convertedDate
      totalJobCost
      totalHours
      totalContractCosts
      totalContractProfit
      totalContingency
      totalContractPrice
      source
      finalized
      finalizedDate
    }
  }
`;
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract($where: ContractWhereInput!) {
    deleteContract(where: $where) {
      contractId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      contractDate
      projectName
      priceLevel
      status
      convertedDate
      totalJobCost
      totalHours
      totalContractCosts
      totalContractProfit
      totalContingency
      totalContractPrice
      source
      finalized
      finalizedDate
    }
  }
`;
export const createContractItem = /* GraphQL */ `
  mutation CreateContractItem($data: ContractItemCreateInput!) {
    createContractItem(data: $data) {
      contractId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const updateContractItem = /* GraphQL */ `
  mutation UpdateContractItem(
    $where: ContractItemWhereInput!
    $data: ContractItemUpdateInput
  ) {
    updateContractItem(where: $where, data: $data) {
      contractId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const deleteContractItem = /* GraphQL */ `
  mutation DeleteContractItem($where: ContractItemWhereInput!) {
    deleteContractItem(where: $where) {
      contractId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const createContractJobcost = /* GraphQL */ `
  mutation CreateContractJobcost($data: ContractJobcostCreateInput!) {
    createContractJobcost(data: $data) {
      costId
      contractId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const updateContractJobcost = /* GraphQL */ `
  mutation UpdateContractJobcost(
    $where: ContractJobcostWhereInput!
    $data: ContractJobcostUpdateInput
  ) {
    updateContractJobcost(where: $where, data: $data) {
      costId
      contractId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const deleteContractJobcost = /* GraphQL */ `
  mutation DeleteContractJobcost($where: ContractJobcostWhereInput!) {
    deleteContractJobcost(where: $where) {
      costId
      contractId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const createContractTerm = /* GraphQL */ `
  mutation CreateContractTerm($data: ContractTermCreateInput!) {
    createContractTerm(data: $data) {
      termId
      contractId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const updateContractTerm = /* GraphQL */ `
  mutation UpdateContractTerm(
    $where: ContractTermWhereInput!
    $data: ContractTermUpdateInput
  ) {
    updateContractTerm(where: $where, data: $data) {
      termId
      contractId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteContractTerm = /* GraphQL */ `
  mutation DeleteContractTerm($where: ContractTermWhereInput!) {
    deleteContractTerm(where: $where) {
      termId
      contractId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer($data: CustomerCreateInput!) {
    createCustomer(data: $data) {
      customerId
      name
      type
      address
      city
      state
      zipcode
      contactName
      contactEmail
      website
      source
      dateCreated
      dateUpdated
      phone
      priceLevel
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $where: CustomerWhereInput!
    $data: CustomerUpdateInput
  ) {
    updateCustomer(where: $where, data: $data) {
      customerId
      name
      type
      address
      city
      state
      zipcode
      contactName
      contactEmail
      website
      source
      dateCreated
      dateUpdated
      phone
      priceLevel
    }
  }
`;

export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer($where: CustomerWhereInput!) {
    deleteCustomer(where: $where) {
      customerId
      name
      type
      address
      city
      state
      zipcode
      contactName
      contactEmail
      website
      source
      dateCreated
      dateUpdated
      phone
      priceLevel
    }
  }
`;
export const createEstimate = /* GraphQL */ `
  mutation CreateEstimate($data: EstimateCreateInput!) {
    createEstimate(data: $data) {
      estimateId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      convertedDate
      projectName
      priceLevel
      status
      totalJobCost
      totalHours
      totalEstimateCost
      totalEstimateProfit
      totalContingency
      totalEstimatePrice
      source
    }
  }
`;
export const updateEstimate = /* GraphQL */ `
  mutation UpdateEstimate(
    $where: EstimateWhereInput!
    $data: EstimateUpdateInput
  ) {
    updateEstimate(where: $where, data: $data) {
      estimateId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      convertedDate
      projectName
      priceLevel
      status
      totalJobCost
      totalHours
      totalEstimateCost
      totalEstimateProfit
      totalContingency
      totalEstimatePrice
      source
    }
  }
`;

export const deleteEstimate = /* GraphQL */ `
  mutation DeleteEstimate($where: EstimateWhereInput!) {
    deleteEstimate(where: $where) {
      estimateId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      convertedDate
      projectName
      priceLevel
      status
      totalJobCost
      totalHours
      totalEstimateCost
      totalEstimateProfit
      totalContingency
      totalEstimatePrice
      source
    }
  }
`;
export const createEstimateItem = /* GraphQL */ `
  mutation CreateEstimateItem($data: EstimateItemCreateInput!) {
    createEstimateItem(data: $data) {
      estimateId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const updateEstimateItem = /* GraphQL */ `
  mutation UpdateEstimateItem(
    $where: EstimateItemWhereInput!
    $data: EstimateItemUpdateInput
  ) {
    updateEstimateItem(where: $where, data: $data) {
      estimateId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;

export const deleteEstimateItem = /* GraphQL */ `
  mutation DeleteEstimateItem($where: EstimateItemWhereInput!) {
    deleteEstimateItem(where: $where) {
      estimateId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const createEstimateJobcost = /* GraphQL */ `
  mutation CreateEstimateJobcost($data: EstimateJobCostCreateInput!) {
    createEstimateJobcost(data: $data) {
      estimateId
      costId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const updateEstimateJobcost = /* GraphQL */ `
  mutation UpdateEstimateJobcost(
    $where: EstimateJobCostWhereInput!
    $data: EstimateJobCostUpdateInput
  ) {
    updateEstimateJobcost(where: $where, data: $data) {
      estimateId
      costId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;

export const deleteEstimateJobcost = /* GraphQL */ `
  mutation DeleteEstimateJobcost($where: EstimateJobCostWhereInput!) {
    deleteEstimateJobcost(where: $where) {
      estimateId
      costId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const createEstimateTerm = /* GraphQL */ `
  mutation CreateEstimateTerm($data: EstimateTermCreateInput!) {
    createEstimateTerm(data: $data) {
      termId
      estimateId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const updateEstimateTerm = /* GraphQL */ `
  mutation UpdateEstimateTerm(
    $where: EstimateTermWhereInput!
    $data: EstimateTermUpdateInput
  ) {
    updateEstimateTerm(where: $where, data: $data) {
      termId
      estimateId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteEstimateTerm = /* GraphQL */ `
  mutation DeleteEstimateTerm($where: EstimateTermWhereInput!) {
    deleteEstimateTerm(where: $where) {
      termId
      estimateId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const createInstallationTerm = /* GraphQL */ `
  mutation CreateInstallationTerm($data: InstallationTermCreateInput!) {
    createInstallationTerm(data: $data) {
      termId
      type
      jobType
      class
      description
      dateCreated
      dateUpdated
    }
  }
`;
export const updateInstallationTerm = /* GraphQL */ `
  mutation UpdateInstallationTerm(
    $where: InstallationTermWhereInput!
    $data: InstallationTermUpdateInput
  ) {
    updateInstallationTerm(where: $where, data: $data) {
      termId
      type
      jobType
      class
      description
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteInstallationTerm = /* GraphQL */ `
  mutation DeleteInstallationTerm($where: InstallationTermWhereInput!) {
    deleteInstallationTerm(where: $where) {
      termId
      type
      jobType
      class
      description
      dateCreated
      dateUpdated
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct($data: ProductCreateInput!) {
    createProduct(data: $data) {
      productId
      category
      name
      color
      diameter
      gauge
      height
      width
      upright
      type
      uom
      length
      roundup
      accountingId
      vendorId
      preferredVendor
      rail
      model
      frame
      mesh
      selvage
      stock
      location
      weight
      cost
      classType
      dateCreated
      dateUpdated
      gateType
      hardwareFunction
      func
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $where: ProductWhereInput!
    $data: ProductUpdateInput
  ) {
    updateProduct(where: $where, data: $data) {
      productId
      category
      name
      color
      diameter
      gauge
      height
      width
      upright
      type
      uom
      length
      roundup
      accountingId
      vendorId
      preferredVendor
      rail
      model
      frame
      mesh
      selvage
      stock
      location
      weight
      cost
      classType
      dateCreated
      dateUpdated
      gateType
      hardwareFunction
      func
    }
  }
`;

export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct($where: ProductWhereInput!) {
    deleteProduct(where: $where) {
      productId
      category
      name
      color
      diameter
      gauge
      height
      width
      upright
      type
      uom
      length
      roundup
      accountingId
      vendorId
      preferredVendor
      rail
      model
      frame
      mesh
      selvage
      stock
      location
      weight
      cost
      classType
      dateCreated
      dateUpdated
      gateType
      hardwareFunction
      func
    }
  }
`;
export const createJobCost = /* GraphQL */ `
  mutation CreateJobCost($data: JobCostCreateInput!) {
    createJobCost(data: $data) {
      costId
      name
      type
      rate
      rateType
      jobType
      dateCreated
      dateUpdated
    }
  }
`;
export const updateJobCost = /* GraphQL */ `
  mutation UpdateJobCost(
    $where: JobCostWhereInput!
    $data: JobCostUpdateInput
  ) {
    updateJobCost(where: $where, data: $data) {
      costId
      name
      type
      rate
      rateType
      jobType
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteJobCost = /* GraphQL */ `
  mutation DeleteJobCost($where: JobCostWhereInput!) {
    deleteJobCost(where: $where) {
      costId
      name
      type
      rate
      rateType
      jobType
      dateCreated
      dateUpdated
    }
  }
`;
export const createEstimatorLayout = /* GraphQL */ `
  mutation CreateEstimatorLayout($data: EstimatorLayoutCreateInput!) {
    createEstimatorLayout(data: $data) {
      estimatorId
      transactionId
      totalFootage
      totalLines
      totalEnds
      totalCorners
      totalHookups
      totalTieIns
      runsArray
      dateCreated
      dateUpdated
    }
  }
`;
export const updateEstimatorLayout = /* GraphQL */ `
  mutation UpdateEstimatorLayout(
    $where: EstimatorLayoutWhereInput!
    $data: EstimatorLayoutUpdateInput
  ) {
    updateEstimatorLayout(where: $where, data: $data) {
      estimatorId
      transactionId
      totalFootage
      totalLines
      totalEnds
      totalCorners
      totalHookups
      totalTieIns
      runsArray
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteEstimatorLayout = /* GraphQL */ `
  mutation DeleteEstimatorLayout($where: EstimatorLayoutWhereInput!) {
    deleteEstimatorLayout(where: $where) {
      estimatorId
      transactionId
      totalFootage
      totalLines
      totalEnds
      totalCorners
      totalHookups
      totalTieIns
      runsArray
      dateCreated
      dateUpdated
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder($data: OrderCreateInput!) {
    createOrder(data: $data) {
      orderId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
      finalized
      finalizedDate
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder($where: OrderWhereInput!, $data: OrderUpdateInput) {
    updateOrder(where: $where, data: $data) {
      orderId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
      finalized
      finalizedDate
    }
  }
`;

export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder($where: OrderWhereInput!) {
    deleteOrder(where: $where) {
      orderId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
      finalized
      finalizedDate
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem($data: OrderItemCreateInput!) {
    createOrderItem(data: $data) {
      orderId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem($where: OrderItemWhereInput!) {
    updateOrderItem(where: $where) {
      orderId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;

export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem($where: OrderItemWhereInput!) {
    deleteOrderItem(where: $where) {
      orderId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const createQuote = /* GraphQL */ `
  mutation CreateQuote($data: QuoteCreateInput!) {
    createQuote(data: $data) {
      quoteId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
    }
  }
`;
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote($where: QuoteWhereInput!, $data: QuoteUpdateInput) {
    updateQuote(where: $where, data: $data) {
      quoteId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
    }
  }
`;

export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote($where: QuoteWhereInput!) {
    deleteQuote(where: $where) {
      quoteId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
    }
  }
`;
export const createQuoteItem = /* GraphQL */ `
  mutation CreateQuoteItem($data: QuoteItemCreateInput!) {
    createQuoteItem(data: $data) {
      quoteId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const updateQuoteItem = /* GraphQL */ `
  mutation UpdateQuoteItem(
    $where: QuoteItemWhereInput!
    $data: QuoteItemUpdateInput
  ) {
    updateQuoteItem(where: $where, data: $data) {
      quoteId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;

export const deleteQuoteItem = /* GraphQL */ `
  mutation DeleteQuoteItem($where: QuoteItemWhereInput!) {
    deleteQuoteItem(where: $where) {
      quoteId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      userId
      lastName
      firstName
      middleInitial
      phone
      email
      hireDate
      isActive
      imageUrl
      backgroundImageUrl
      birthdate
      dateCreated
      dateUpdated
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($where: UserWhereInput!, $data: UserUpdateInput) {
    updateUser(where: $where, data: $data) {
      userId
      lastName
      firstName
      middleInitial
      phone
      email
      hireDate
      isActive
      imageUrl
      backgroundImageUrl
      birthdate
      dateCreated
      dateUpdated
    }
  }
`;

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($where: UserWhereInput!) {
    deleteUser(where: $where) {
      userId
      lastName
      firstName
      middleInitial
      phone
      email
      hireDate
      isActive
      imageUrl
      backgroundImageUrl
      birthdate
      dateCreated
      dateUpdated
    }
  }
`;
