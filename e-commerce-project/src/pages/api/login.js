// pages/api/login.js
const users = [
    { email: 'customer@commerce.com', password: '123456', name: 'Customer User', role: 'customer' },
    { email: 'store@commerce.com', password: '123456', name: 'Store Owner', role: 'store' },
    { email: 'admin@commerce.com', password: '123456', name: 'Admin User', role: 'admin' },
];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // JWT oluşturma işlemini burada gerçekleştirin (örnek olarak basit bir token kullanıyoruz)
            const token = 'fake-jwt-token'; // Gerçek JWT oluşturmalısınız
            res.status(200).json({ user: { email: user.email, name: user.name, role: user.role }, token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
