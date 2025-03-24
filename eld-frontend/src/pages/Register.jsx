import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
        }

        try {
        const response = await API.post("/register/", formData);
        login(response.data.token);
        navigate("/dashboard");
        } catch (err) {
        setError("Registration failed, please try again.");
        }
    };

    return (
        <Container maxWidth="xs" className={css(styles.container)}>
            <Typography variant="h4">Register</Typography>
            <form onSubmit={handleSubmit} className={css(styles.form)}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={handleChange}
                />
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
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
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

export default Register;