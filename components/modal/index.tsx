import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.less";

interface IModalProps {
    visible: boolean;
    children: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLElement>;
}

class Modal extends React.Component<IModalProps, {}> {

    public modal: Element;

    public componentDidMount() {
        if (this.props.visible) {
            this.modal = document.createElement("div");
            document.body.appendChild(this.modal);
            this.renderModal();
        }
    }

    public componentDidUpdate(prevProps: IModalProps) {
        // first show
        if (!this.modal && this.props.visible !== prevProps.visible) {
            this.modal = document.createElement("div");
            document.body.appendChild(this.modal);
        }
        // change
        if (this.props.visible !== prevProps.visible) {
            // overflow
            if (this.props.visible) {
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
            } else {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
            }
            this.renderModal();
        }
        // update
        if (this.props.visible && this.props.children !== prevProps.children) {
            this.renderModal();
        }
    }

    public componentWillUnmount() {
        if (this.modal) {
            ReactDOM.unmountComponentAtNode(this.modal);
            document.body.removeChild(this.modal);
        }
    }

    public renderModal = () => {
        const module = (
            <div className = "modal" style = {{ display: this.props.visible ? "block" : "none" }}>
                <div className = "content">
                    <i className = "close" onClick = { this.props.onClose }></i>
                    { this.props.children }
                </div>
            </div>
        );
        ReactDOM.render(module, this.modal);
    }

    public render() {
        return "";
    }
}

export default Modal;
