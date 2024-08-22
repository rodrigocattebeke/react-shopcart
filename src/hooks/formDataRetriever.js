import { useState } from "react";

export default function formDataRetriever(initialForm) {
    const [formData, setFormData] = useState(initialForm);

    const onFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return {
        formData,
        onFormInputChange,
    };
}
