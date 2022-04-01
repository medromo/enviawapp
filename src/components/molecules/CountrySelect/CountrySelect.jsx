import React from "react";

import "./CountrySelect.scss";
import "../../../styles/global.scss";

function CountrySelect() {
  return (
    <div className="input">
      <select name="paises" id="codigo_pais">
        <option value={+52}>MX +52</option>
        <option value={+55}>BR +55</option>
        <option value={+57}>CO +57</option>
        <option value={+54}>AR +54</option>
        <option value={+1}>US +1</option>
      </select>
      <input
        id="tel"
        type="text"
        className="input__box"
        placeholder="Ingresa el número"
        inputMode="decimal"
      />
    </div>
  );
}

export { CountrySelect };
