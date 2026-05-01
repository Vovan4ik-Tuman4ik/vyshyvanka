function sendWebhook(event) {
    event.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1499720940270129242/8kc9r76MHRShFSiodk7O7Bqq50etP4iXffLfc7uejN6fD9DT79odpQYqj6Gwrc-f8pu1";
    if (document.getElementById("agreement").value == "yes") {
        const name = document.getElementById("name").value;
        const nickname = document.getElementById("nickname").value;
        const age = document.getElementById("age").value;
        const timezone = document.getElementById("timezone").value;
        const country = document.getElementById("country").value;
        const experience = document.getElementById("experience").value || "Не вказано";
        const online = document.getElementById("online").value;
        const telegram = document.getElementById("telegram").value;
        const discord = document.getElementById("discord").value;
        const motivation = document.getElementById("motivation").value;
        const agreement = document.getElementById("agreement").value === "yes" ? "Так ✅" : "Ні ❌";

        const data = {
            username: "Анкета модератора",
            embeds: [
                {
                    title: "📋 Нова заявка на модератора",
                    color: 3447003,

                    description:
                        `<:name:1499761137045209198>  **Ім'я:** ${name}
<:nick:1499761323272307009> **Нік:** ${nickname}
<:age:1499761191973814292> **Вік:** ${age}

<:location:1499761269270642778> **Локація:** ${country}
<:timezone:1499762616476893256> **Часовий пояс:** ${timezone}
<:online:1499761484765331466> **Онлайн:** ${online}

<:telegram:1499761618656039043> **Telegram:** ${telegram}
<:discord:1499761552159412325> **Discord:** ${discord}
📜 **Правила:** ${agreement}

<:expirience:1499761387688427551> **Досвід:**
${experience}

🔥 **Мотивація:**
${motivation}`,

                    footer: {
                        text: "Форма заявок"
                    },

                    timestamp: new Date().toISOString()
                }
            ]
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("✅ Заявку відправлено!");
                document.querySelector("form").reset();
            })
            .catch(err => {
                console.error(err);
                alert("❌ Помилка");
            });
    }else {
    alert("Аби надіслати заявку ви повинні погодитись з правилами!!!")
}
}