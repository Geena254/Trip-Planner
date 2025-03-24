import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await API.post("/login/", formData);
        login(response.data.token);
        navigate("/dashboard");
        } catch (err) {
        setError("Invalid credentials, please try again.");
        }
    };

    return (
        <Container maxWidth="xs" className={css(styles.container)}>
            <Typography variant="h4">Login</Typography>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit} className={css(styles.form)}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        textAlign: 'center',
        padding: 20,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
});

export default Login;
