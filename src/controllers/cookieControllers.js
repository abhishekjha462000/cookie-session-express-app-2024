const cookiePageController = (req, res) => {
    res.cookie('name', 'Abhishek', { maxAge: 60000 });
    res.json({
        message: 'cookie page'
    });
};

const signedCookiePageController = (req, res) => {
    res.cookie('name', 'Abhishek', { maxAge: 60000 * 6, signed: true });
    res.json({
        message: 'signed cookie page'
    });
};

const getCookie = (req, res) => {
    const name = req.cookies.name;
    res.json({
        signed: false,
        cookieName: 'name',
        cookieValue: name
    });
};

const getSignedCookie = (req, res) => {
    const name = req.signedCookies.name;
    res.json({
        signed: true,
        cookieName: 'name',
        cookieValue: name
    });
};

module.exports = { getCookie, getSignedCookie, cookiePageController, signedCookiePageController };