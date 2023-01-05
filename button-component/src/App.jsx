import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h2>Buttons</h2>
      <div>
        <div className="flex">
          <p className="flex-text">{`<Button >`}</p>

          <Button
            bgColor={`#E0E0E0`}
            text="Default"
            color="#3f3f3f"
            border="none"
            width="47%"
          />
        </div>
        <div className="flex">
          <p className="flex-text">{`&:hover, &:focus`}</p>

          <Button
            bgColor={`#AEAEAE`}
            text="Default"
            color="#3F3F3F"
            border="none"
            width="47%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button variant="outline" />`}</p>
          <Button
            // bgColor={`#333333`}
            text="Default"
            color="#3D5AFE"
            border="1px solid #3D5AFE"
            width="53%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{`&:hover, &:focus`}</p>
          <Button
            bgColor={`rgba(41, 98, 255, 0.1)`}
            text="Default"
            color="#3D5AFE"
            border="none"
            width="53%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button variant="text" />`}</p>
          <Button
            bgColor={`#FFFFFF`}
            text="Default"
            color="#3D5AFE"
            width="45%"
            border="none"
          />
        </div>
        <div className="flex">
          <p className="container-text">{`&:hover, &:focus`}</p>
          <Button
            bgColor={`rgba(41, 98, 255, 0.1)`}
            text="Default"
            color="#3D5AFE"
            width="55%"
            border="none"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`ButtonDisabledShadow`}</p>
          <Button
            bgColor={`#3D5AFE`}
            text="Default"
            color="#FFFFFF"
            border="none"
            width="45%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button disabled />`}</p>
          <Button
            bgColor={`#E0E0E0`}
            text="Disabled"
            color="#9E9E9E"
            border="none"
            width="55%"
          />
        </div>
        <div className="flex">
          <p className="container-text">{`<Button variant="text" disabled />`}</p>
          <Button
            bgColor={`transparent`}
            text="Disabled"
            color="#9E9E9E"
            border="none"
            width="45%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button startIcon="local_grocery_store" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Disabled"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="43%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{`<Button endIcon="local_grocery_store" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Disabled"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="45%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button size="sm" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Default"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="45%"
          />
        </div>
        <div className="flex">
          <p className="container-text">{`<Button size="md" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Default"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="55%"
          />
        </div>
        <div className="flex">
          <p className="container-text">{`<Button size="lg" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Default"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="63%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`<Button color="default" />`}</p>
          <Button
            bgColor={`#E0E0E0`}
            text="Default"
            color="#3F3F3F"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="50%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{`<Button color="primary" />`}</p>
          <Button
            bgColor={`#2962FF`}
            text="Primary"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="50%"
          />
        </div>
        <div className="flex">
          <p className="container-text">{`<Button color="secondary" />`}</p>
          <Button
            bgColor={`#455A64`}
            text="Secondary"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="63%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{`<Button color="danger" />`}</p>
          <Button
            bgColor={`#D32F2F`}
            text="Danger"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="55%"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="container-text">{`&:hover, &:focus`}</p>
          <Button
            bgColor={`#AEAEAE`}
            text="Default"
            color="#3F3F3F"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="50%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{``}</p>
          <Button
            bgColor={`#0039CB`}
            text="Primary"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="50%"
          />
        </div>
        <div className="flex">
          <p className="container-text">{``}</p>
          <Button
            bgColor={`#1C313A`}
            text="Secondary"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="63%"
          />
        </div>

        <div className="flex">
          <p className="container-text">{` `}</p>
          <Button
            bgColor={`#9A0007`}
            text="Danger"
            color="#FFFFFF"
            border="none"
            boxShadow=" 0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="55%"
          />
        </div>
      </div>

      <footer>created by orjichimaprince - devChallenges</footer>
    </div>
  );
}

export default App;
