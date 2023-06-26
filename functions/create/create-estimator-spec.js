const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const {  ESTIMATOR_SPECS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const { data } = event.arguments

    const newEstimatorSpecification = {
        __typename: "EstimatorSpecification",
        estimatorId: data.estimatorId,
        transactionId: data.transactionId,
        color: data.color,
        height: data.height,
        gauge: data.gauge,
        mesh: data.mesh,
        selvage: data.selvage,
        class: data.class,
        chainlinkId: data.chainlinkId,
        topRailType: data.topRailType,
        midRailCount: data.midRailCount,
        bottomRailType: data.bottomRailType,
        braceRailBool: data.braceRailBool,
        trussRodsBool: data.trussRodsBool,
        terminalPostDiameter: data.terminalPostDiameter,
        terminalPostGauge: data.terminalPostGauge,
        terminalPostId: data.terminalPostId,
        terminalPostLength: data.terminalPostLength,
        linePostDiameter: data.linePostDiameter,
        linePostGauge: data.linePostGauge,
        linePostId: data.linePostId,
        linePostLength: data.linePostLength,
        railPipeDiameter: data.railPipeDiameter,
        railPipeGauge: data.railPipeGauge,
        railPipeId: data.railPipeId,
        railPipeLength: data.railPipeLength,
        maxSectionSpacingFeet: data.maxSectionSpacingFeet,
        platedPostsBool: data.platedPostsBool,
        barbwireBool: data.barbwireBool,
        razorBool: data.razorBool,
        tensionwireId: data.tensionwireId,
        hogRingsId: data.hogRingsId,
        tiesPerRail: data.tiesPerRail,
        tiesPerRailLine: data.tiesPerRailLine,
        tensionBandPerHookup: data.tensionBandPerHookup,
        braceBandPerHookup: data.braceBandPerHookup,
        barbwireId: data.barbwireId,
        barbarmId: data.barbarmId,
        baseId: data.baseId,
        boltId: data.boltId,
        concreteId: data.concreteId,
        linetieId: data.linetieId,
        loopId: data.loopId,
        railEndId: data.railEndId,
        railTieId: data.railTieId,
        razorId: data.razorId,
        tensionBarId: data.tensionBarId,
        terminalBraceId: data.terminalBraceId,
        terminalCapId: data.terminalCapId,
        ternminalTensionId: data.ternminalTensionId,
        trussRodId: data.trussRodId,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        
    }
     
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Put: {
                    TableName: ESTIMATOR_SPECS_TABLE_NAME,
                    Item: newEstimatorSpecification,
                }
            },
        ]
    }).promise();

    return newEstimatorSpecification;
}