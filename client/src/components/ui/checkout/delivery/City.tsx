import { useDebounce } from "@/hooks/useDebounce";
import { NovaPoshta } from "@/services/NovaPoshta/NovaPoshta";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Modal, TreeSelect } from "antd";
import { useEffect, useState } from "react";
import { Item } from "../Delivery";

const City = () => {
    const [value, setValue] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [shouldShow, setShouldShow] = useState(false);

    const debouncedValue = useDebounce(value, 800);

    useEffect(() => {
        (async () => {
            if (debouncedValue) {
                const respone = await NovaPoshta.searchByTerm(value);
                setCities(respone.data[0]?.Addresses || []);
            }
        })()
    }, [debouncedValue]);

    return (
        <>
            <Item onClick={() => setShouldShow(true)}>
                <EnvironmentOutlined />
                <div>
                    <p style={{color: 'gray'}}>Your city:</p>
                    <p>{selectedCity || 'Choose you city'}</p>
                </div>
            </Item>
            <Modal 
                title="Choose your city" 
                open={shouldShow} 
                onOk={() => setShouldShow(false)} 
                onCancel={() => setShouldShow(false)}
            >
                <TreeSelect 
                    showSearch={true}
                    style={{ width: '100%', top: 0 }}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="City..."
                    allowClear
                    treeDefaultExpandAll
                    value={value}
                    onChange={setSelectedCity}
                    onSearch={setValue}
                    onClear={() => setCities([])}
                    treeDataSimpleMode={true}
                    treeData={
                    cities.map((address, index) => 
                        ({
                            id: address, 
                            pId: address.Present, 
                            key: address.Present, 
                            value: address.Present, 
                            title: address.Present
                        }))
                    }
                />
            </Modal>
        </>
    )
}

export default City