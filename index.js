import express from "express";

const app = express();
app.use(express.json());

app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Invalid input" });
        }

        const even = [];
        const odd = [];
        const alphabets = [];
        const special = [];
        let sum = 0;
        let letters = "";

        data.forEach(item => {
            if (/^\d+$/.test(item)) {
                const num = parseInt(item);
                if (num % 2 === 0) even.push(item);
                else odd.push(item);
                sum += num;
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                letters += item;
            } else {
                special.push(item);
            }
        });

        const concatString = letters
            .split("")
            .reverse()
            .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
            .join("");

        res.json({
            is_success: true,
            user_id: "pradyun_gupta_19112003",
            email: "pradyun.22bce8780@vitapstundent.ac.in",
            roll_number: "22BCE8780",
            odd_numbers: odd,
            even_numbers: even,
            alphabets,
            special_characters: special,
            sum: sum.toString(),
            concat_string: concatString
        });
    } catch (err) {
        res.status(500).json({ is_success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
