import myAxios from 'axios';

export async function sendEmail(user) {
    try {
        const response = await myAxios.post('http://localhost:8000/api/send-email', {
            email: user.email,
            message: 'Szia! Ez egy automatikus üzenet.',
        });

        console.log(response.data.message);
    } catch (error) {
        console.error('Hiba az email küldés közben:', error.response?.data || error.message);
    }
}
