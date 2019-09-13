import Button from "@components/button";
import Modal from "@components/modal";
import * as React from "react";

class ModalExample extends React.Component {
    public state = {
        visible: false, // 弹窗显示状态
    };

    public visibleChange = () => {
        this.setState({ visible: true });
    }

    public render() {
        const module = (
            <div>
                <Button onClick = { this.visibleChange }>弹窗</Button>
                <Modal
                    visible = { this.state.visible }
                >
                    <div>1111</div>
                </Modal>
            </div>
        );

        return module;
    }
}

export default ModalExample;
