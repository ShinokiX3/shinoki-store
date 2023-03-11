import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cartSlice } from '@/store/cart/cart.slice';
import { userSlice } from '@/store/user/user.slice';
import { categorySlice } from '../store/category/category.slice';

const rootAction = {
	...cartSlice.actions,
	...userSlice.actions,
	...categorySlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
