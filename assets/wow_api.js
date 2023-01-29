require('dotenv').config();

async function getAccesToken() {
    const auth = await fetch("https://oauth.battle.net/token", {
        body: "grant_type=client_credentials",
        headers: {
            Authorization: process.env.BLIZZARD_AUTH,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    res = await auth.json()
    return res.access_token
};

exports.getPVEStatistic = async (region, realms, username) => {
    const token = await getAccesToken();
    const rawData = await fetch(`https://${region}.api.blizzard.com/profile/wow/character/${realms}/${username}/mythic-keystone-profile?namespace=profile-${region}&locale=en_US&access_token=${token}`)
    return await rawData.json();
};

