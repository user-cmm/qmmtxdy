export type Res = ErrorInfo | SuccessInfo
interface Info{
  error: boolean
  message: string
}
interface ErrorInfo extends Info{
  error: true
  body: never[]
}
interface SuccessInfo extends Info{
  error: false
  body: Body
}
interface Body {
  author_details:AuthorDetails
  illust_details:IllustDetails
}
interface AuthorDetails{
  user_id: string
  user_name: string
  user_account: string
  profile_img: {
    main: string
  }
  fanbox_details?:FanboxDetails
}
interface FanboxDetails{
  user_id: string
  cover_image_url: string
  description: string
  has_adult_content: string
  registration_datetime: string
  updated_datetime: string
  url: string
}
interface IllustDetails{
  alt: string
  comment: string
  display_tags: {
    is_deletable: boolean
    is_locked: boolean
    // pixiv 百科全书
    is_pixpedia_article_exists: boolean
    set_by_author: boolean
    tag: string
    translation?: string
  }[]
  width: string
  height: string
  title: string
  upload_timestamp: number
  url_big: string
}