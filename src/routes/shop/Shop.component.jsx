import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import { Route, Routes } from 'react-router-dom';
import Category from '../category/Category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
