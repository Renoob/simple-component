import * as React from "react";
import Modal from "@components/modal";

class ModalExample extends React.Component {
    public render() {
        const module = (
            <div>
                <button>弹窗</button>
                <Modal
                    visible = { false }
                >
                    <div>1111</div>
                </Modal>
            </div>
        );

        return module;
    }
}

export default ModalExample;
