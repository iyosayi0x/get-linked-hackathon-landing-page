declare interface RegisterData {
    id: number;
    email: string;
    phone_number: string;
    project_topic: string;
    group_size: number;
    privacy_poclicy_accepted: boolean;
    date_created: string;
    last_updated: string;
    category: number;
}

declare interface RegisterArguments {
    email: string;
    phone_number: string;
    team_name: string;
    group_size: number;
    project_topic: string;
    category: number;
    privacy_poclicy_accepted: boolean;
}
