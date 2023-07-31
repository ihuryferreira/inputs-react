/* eslint-disable no-const-assign */
import { useState } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
    const [password, setPassword] = useState("");
    const [copyText, setCopyText] = useState("copy");
    const [imgGerar, setImgGerar] = useState("");
    const [imgGerar2, setImgGerar2] = useState("");
    const [passwordSize, setPasswordSize] = useState(12);
    const [showInput, setShowInput] = useState(false);

    function Gerator() {
        const active = document.querySelector(".result");

        active.classList.add("open");

        const chars = "-!@#$&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW";
        var newPassword = "";
        for (var i = 0; i <= passwordSize; ++i) {
            const position = Math.floor(Math.random() * chars.length);
            newPassword += chars[position];
        }
        setPassword(newPassword);
        setCopyText("copy");
        document.querySelector("span").style.display = "inline";
        const gerarImg =
            "M18 15.5H14V11.5H15.5V13.4747C16.3951 12.0644 16.5 10.6338 16.5 10C16.5 6.41015 13.5898 3.5 9.99999 3.5C9.25038 3.5 8.5304 3.62689 7.86036 3.86037L6.707 2.70701C7.71129 2.25283 8.82611 2 9.99999 2C14.4183 2 18 5.58172 18 10C18 11.0128 17.7006 12.7479 16.9134 14H18V15.5Z";
        const gerarImg2 =
            "M3.50001 10.0001C3.50001 13.5899 6.41016 16.5001 10 16.5001C10.7496 16.5001 11.4696 16.3732 12.1396 16.1397L13.293 17.293C12.2887 17.7472 11.1739 18.0001 10 18.0001C5.58173 18.0001 2.00001 14.4183 2.00001 10.0001C2.00001 8.98725 2.29938 7.25215 3.08663 6.00003H2V4.50003H6V8.50003H4.5V6.52536C3.60487 7.93562 3.50001 9.36629 3.50001 10.0001Z";

        setImgGerar(gerarImg);
        setImgGerar2(gerarImg2);
    }

    function copy() {
        window.navigator.clipboard.writeText(password);
        setCopyText("copied!");
    }

    return (
        <>
            <div>
                <h1>Gerador de Senha</h1>
            </div>
            <div>
                <label htmlFor="showInput">Customizar tamanho:</label>
                <input
                    type="checkbox"
                    id="showInput"
                    value={showInput}
                    onChange={() => setShowInput((show) => !show)}
                />
            </div>
            {showInput && (
                <div style={{ paddingTop: "1rem" }}>
                    <label htmlFor="passwordSize">Tamanho:&nbsp;</label>
                    <Input
                        passwordSize={passwordSize}
                        setPasswordSize={setPasswordSize}
                    />
                </div>
            )}
            <div className="card">
                <button type="button" onClick={Gerator}>
                    Gerar senha de {showInput ? passwordSize : 8} caracteres!{" "}
                    <span style={{ display: "none" }}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            version="1.1"
                            className="gerarImg"
                        >
                            <path d={imgGerar}></path>{" "}
                            <path d={imgGerar2}></path>
                        </svg>
                    </span>
                </button>
                <button onClick={copy}>{copyText}</button>
            </div>
            <h1>Senha</h1>
            <div className="result">
                <p className="read-the-docs">
                    <span style={{ color: "#2846aa", fontSize: "1.2rem" }}>
                        Sua senha segura:{" "}
                    </span>
                    {password}
                </p>
            </div>
        </>
    );
}

export default App;
