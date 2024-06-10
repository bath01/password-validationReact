
export default function PasswordValidatorStatus({validator}) {

    return (
    <>
      <ul>
        <li style={{ color: validator.hasLowerCaseLetter() ? "green" : "red" }}>
          Un Caractère Miniscule
        </li>
        <li style={{ color: validator.hasUpperCaseLetter() ? "green" : "red" }}>
          Un Caractère Majuscule
        </li>
        <li style={{ color: validator.hasSpecialCharacter() ? "green" : "red" }}>
          Un Caractère spécial
        </li>
        <li style={{ color: validator.hasNumber() ? "green" : "red" }}>
          Un Nombre
        </li>
        <li style={{ color: validator.hasValidLength() ? "green" : "red" }}>
          Minimum 8 Caractère
        </li>
      </ul>
    </>
  );
}