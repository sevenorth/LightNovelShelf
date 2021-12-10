import { BookServicesTypes } from '@/services/book'

/** 书架书籍 */
export interface ShelfBook extends BookServicesTypes.BookInList {}
/** 书架文件夹 */
export interface ShelfFolder {
  /** 文件夹Id，尽量跟Book同名方便模板书写 */
  Id: number
  /** 文件夹名称，尽量跟Book同名方便模板书写 */
  Title: string
  /** 文件夹内书籍 */
  BooksID: ShelfBook[]
}

export enum SheldItemType {
  book = 'book',
  folder = 'folder'
}

export type SheldItem =
  | {
      type: SheldItemType.book
      index: number
      value: ShelfBook
    }
  | {
      type: SheldItemType.folder
      index: number
      value: ShelfFolder
    }
