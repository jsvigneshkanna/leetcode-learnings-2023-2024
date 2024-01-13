import pandas as pd

def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    sales_product_join = sales.merge(
        product,
        on = ['product_id']
    )
    
    return sales_product_join[['product_name', 'year', 'price']]
    