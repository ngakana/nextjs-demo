export interface ImageSelectOption {
    value: string;
    label: string;
    image: string;
}

export interface ImageSelectProps {
    options: ImageSelectOption[];
    value: string;
}