create table public.profiles (
    id uuid not null references auth.users on delete cascade,

    title text not null,
    designation text not null,
    currency text not null,

    preferred_investment_type text array,
    investment_frequency text,

    monthly_income_range numeric array,
    expense_tracking_preferences text array,
    monthly_budget_limit numeric,

    smart_alerts text array,
    preferred_mode_insights text array,

    primary key (id)
);

