const given = require('../../steps/given')
const when = require('../../steps/when')
const then = require('../../steps/then')
const chance = require('chance').Chance()


describe('When a user signs up', () => {
  it("The user's profile should be saved in DynamoDB", async () => {
    const { name, email } = given.a_random_user();
    const username = chance.guid();
    // console.log( "username, Name, Email", username, name, email)
    await when.a_user_signs_up(username, name, email)
    // console.log( "User: ", user)
    const ddbUser = await then.user_exists_in_UsersTable(username)
    console.log( "ddbUser: ", ddbUser)
    expect(ddbUser).toMatchObject({
      id: user.username,
      name,
      createdAt: expect.stringMatching(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/g),
    })

    const [firstName, lastName] = name.split(' ')
    expect(ddbUser.screenName).toContain(firstName)
    expect(ddbUser.screenName).toContain(lastName)
  })
})