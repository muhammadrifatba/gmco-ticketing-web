import { useRef, useState, useEffect} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexName = /^([A-Za-z]+[ ]*)+$/;
const regexPhone = /^[0-9]+$/;

const FormBelajar = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [first, setFirst] = useState('John');
    const [validFirst, setValidFirst] = useState(false);
    const [firstFocus, setFirstFocus] = useState(false);

    const [last, setLast] = useState('Doe');
    const [validLast, setValidLast] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);

    const [email, setEmail] = useState('johndoe123@example.com');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('08xxxxxxxxxx');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        const result = regexName.test(first);
        console.log(result);
        console.log(first);
        setValidFirst(result);
    }, [first])

    useEffect(() => {
        const result = regexName.test(last);
        console.log(result);
        console.log(last);
        setValidLast(result);
    }, [last])

    useEffect(() => {
        const result = regexEmail.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = regexPhone.test(phone);
        console.log(result);
        console.log(phone);
        setValidPhone(result);
    }, [phone])

    useEffect(() => {
        setErrMsg('');
    }, [first, last, email, phone])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Your Data</h1>
            <form>

                <label htmlFor="firstName">
                    Nama Depan:
                    <span className={validFirst ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validFirst || !first ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="firstName"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=> setFirst(e.target.value)}
                    required
                    aria-invalid={validFirst ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                />
                <p id="uidnote" className={firstFocus && first && !validFirst ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Ketikkan nama depan Anda.<br />
                </p>
                
                <label htmlFor="lastName">
                    Nama Belakang:
                    <span className={validLast ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validLast || !last ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="lastName"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=> setLast(e.target.value)}
                    required
                    aria-invalid={validLast ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                />
                <p id="uidnote" className={lastFocus && last && !validLast ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Ketikkan nama belakang Anda.<br />
                </p>
                
                <label htmlFor="email">
                    Email:
                    <span className={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validEmail || !last ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=> setLast(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Ketikkan email Anda.<br />
                </p>

                <label htmlFor="phone">
                    Nomor Telepon:
                    <span className={validPhone ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPhone || !phone ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="phone"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=> setLast(e.target.value)}
                    required
                    aria-invalid={validPhone ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
                />
                <p id="uidnote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Ketikkan nomor telepon Anda.<br />
                </p>

            </form>
        </section>
    )
}

export default FormBelajar