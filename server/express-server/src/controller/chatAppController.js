async function createChannel(req, res) {
  const room = {
    name: req.body.name,
    owner: req.user.username,
  };
}
