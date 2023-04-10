import { createBroadcastChannel, getBroadcastChannel } from "../service/chatAppService"

async function createBroadcastRoom (req, res) {
    const room = {
        name: "broadcast",
        owner: "admin",
        message: []
    }

    const broadcastChannel = await createBroadcastChannel(room)

    res.send(broadcastChannel);
};

async function getBroadcastHistory (req, res) {
    const history = await getBroadcastChannel();

    res.send(history);
};

export default { createBroadcastRoom, getBroadcastHistory }