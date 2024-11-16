const getSession = (req, res) => {
    const name = req.session.name;
    const age = req.session.age;

    res.json({
        message: 'get_session',
        name,
        age
    });
};

const setSession = (req, res) => {
    req.session.name = 'Abhishek';
    req.session.age = 24;

    res.json({
        message: 'set_session',
    })
};

module.exports = { getSession, setSession };