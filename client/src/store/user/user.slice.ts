import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
    IUserInitialState
} from './user.types'

const initialState: IUserInitialState = {
	upperDrawer: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleUpperDrawer: (state, action: PayloadAction<boolean>) => {
			state.upperDrawer = action.payload;
		},
		reset: state => {
			state.upperDrawer = false
		}
	}
})
