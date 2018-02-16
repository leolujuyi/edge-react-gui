// @flow

const strings = {
  bitcoin_received: '%1$s Received',
  bitcoin_remaining: '%1$s Remaining…',
  calculator_done: 'Done',
  change_mining_fee_body: 'Warning: Low Fees may cause long delays in transaction confirmation',
  change_currency_fee: 'Change Currency',
  could_not_select: 'Could Not Select Wallet',
  dialog_title: 'Set Auto Logoff time',
  drawer_exchange_rate_loading: 'Exchange Rate Loading',
  drawer_more: 'More',
  drawer_request: 'Request',
  drawer_scan: 'Scan',
  drawer_transactions: 'Transactions',
  drawer_wallets: 'Wallets',
  dropdown_exchange_max_amount: 'Exchange Max Amount',
  edge_description: 'This application would like to create or access its wallet in your Edge account.\n\n It will not have access to any other wallets.',
  exchange_failed: 'Exchange Failed',
  exchange_succeeded: 'Exchange Succeeded',
  exchanges_may_take_minutes: 'Exchanges may take several minutes to process. Please check your destination wallet after a few minutes',
  fragment_wallets_addwallet_blockchain_hint: 'Choose a blockchain',
  fragment_wallets_addwallet_fiat_hint: 'Choose a fiat currency',
  fragmet_wallets_addtoken_option: 'Add Token',
  fragmet_wallets_managetokens_option: 'Manage Tokens',
  managetokens_top_instructions: 'Please select which tokens you would like displayed within the wallet:',
  manage_tokens_duplicate_currency_code: 'A token with that currency code already exists.',
  addtoken_top_instructions: "To add a token, please fill out the following form and press 'Save'",
  accept_button_text: 'Accept',
  addtoken_contract_address_input_text: 'Contract Address',
  addtoken_currency_code_input_text: 'Token Code',
  addtoken_default_error_message: 'Unable to edit token',
  addtoken_invalid_information: 'Please enter valid token information and try again',
  addtoken_denomination_input_text: 'Number of Decimal Places',
  addtoken_name_input_text: 'Token Name',
  addtoken_add: 'Add',
  edittoken_top_instructions: "Fill out token info and tap 'Save' to edit token:",
  edittoken_delete_token: 'Delete Token',
  edittoken_delete_prompt: 'Are you sure you want to delete this token?',
  edittoken_delete_title: 'Unable to Edit Token',
  edittoken_duplicate_currency_code: 'A token with that token code already exists.',
  edittoken_invalid_decimal_places: 'Please enter a valid numer of decimal places.',
  edittoken_improper_token_load: 'Unable to load initial data.',
  fragment_wallets_sort: 'Sort',
  fragment_wallets_this_wallet: 'this wallet?', // needs work
  fragment_select_wallet_header_title: 'Choose one of the following as selected wallet:',
  fragment_create_wallet_create_wallet: 'Create Wallet',
  fragment_create_wallet_select_valid: 'Please select valid data',
  fragment_excahnge_wallet_from_header_title: 'Choose a wallet to exchange funds from:',
  fragment_excahnge_wallet_to_header_title: 'Choose a wallet to exchange funds to:',
  fragment_insufficient_funds: 'insufficient funds',
  fragmet_invalid_password: 'Invalid Password',
  fragment_request_copy_title: 'Copy',
  fragment_request_subtitle: 'Request',
  fragment_send_address_dialog_title: 'Send to Public Address',
  fragment_send_address: 'Address',
  fragment_send_flash: 'Flash',
  fragment_send_other_wallet_header_title: 'Choose a wallet to transfer funds to:',
  fragment_send_send_bitcoin_unscannable: 'Unable to scan QR code',
  fragment_send_send_to_hint: 'Public Address or Private Key',
  fragment_send_subtitle: 'Send',
  fragment_transaction_exchange: 'Exchange',
  fragment_transaction_expense: 'Expense',
  fragment_transaction_income: 'Income',
  fragment_transaction_list_receive_prefix: 'Received ',
  fragment_transaction_list_sent_prefix: 'Sent ',
  fragment_transaction_transfer: 'Transfer',
  fragment_wallet_unconfirmed: 'Pending',
  fragment_wallets_addwallet_name_hint: 'New Wallet Name',
  fragment_wallets_balance_text: 'Total Balance',
  fragment_wallets_delete_wallet: 'Delete Wallet',
  fragment_wallets_set_custom_fees: 'Set Custom Mining Fee',
  fragment_wallets_resync_wallet: 'Resync Wallet',
  fragment_wallets_split_wallet: 'Split Wallet',
  fragment_wallets_get_seed_wallet: 'Get Seed',
  fragment_wallets_header: 'My Wallets',
  fragment_wallets_rename_wallet: 'Rename Wallet',
  fragment_wallets_resync_wallet_first_confirm_message_mobile: 'Are you sure you want to resync ',
  fragment_wallets_split_wallet_first_confirm_message_mobile: 'Are you sure you want to split ',
  fragment_wallets_get_seed_wallet_first_confirm_message_mobile: 'Are you sure you want to reveal the private seed for the following wallet?',
  fragmet_wallets_delete_wallet_first_confirm_message_mobile: 'Are you sure you want to delete ',
  fragmet_wallets_list_archive_title_capitalized: 'Archive',
  create_wallet_select_valid_crypto: 'Please select a valid wallet type',
  create_wallet_invalid_input: 'Invalid input',
  create_wallet_select_valid_fiat: 'Please select a valid fiat currency',
  create_wallet_choose_crypto: 'Choose a wallet type',
  create_wallet_invalid_name: 'Invalid wallet name',
  create_wallet_enter_valid_name: 'Please enter a valid wallet name',
  create_wallet_top_instructions: 'Please double-check wallet information and submit:',
  create_wallet_name_label: 'Wallet Name:',
  create_wallet_crypto_type_label: 'Wallet Type:',
  create_wallet_fiat_type_label: 'Wallet Fiat:',
  help_build: 'Build',
  help_modal_title: 'Crypto Wallet and Directory',
  help_version: 'Version',
  loading: 'Loading…',
  mining_fee_high_label_choice: 'High',
  mining_fee_low_label_choice: 'Low',
  mining_fee_standard_label_choice: 'Standard',
  request_qr_email_title: '%1$s Bitcoin Request',
  request_qr_your_receiving_wallet_address: 'Your Receiving Wallet Address',
  select_recv_wallet: 'Select Receiving Wallet',
  select_src_wallet: 'Select Source Wallet',
  send_confirmation_fee_line: 'Fee: + %s (%s)',
  send_confirmation_max_button_title: 'Send Max Amount',
  send_confirmation_slide_to_confirm: 'Slide to Confirm',
  send_scan_header_text: 'Scan, to Send, import, or Edge Login',
  send_to_title: 'To:',
  settings_account_title_cap: 'Account',
  settings_button_change_password: 'Change Password',
  settings_button_debug: 'Debug',
  settings_button_lock_settings: 'Tap to Lock Account Settings',
  settings_button_password_recovery: 'Password Recovery',
  settings_button_logout: 'Logout',
  settings_button_pin: 'Change PIN',
  settings_button_send_logs: 'Send Logs',
  settings_button_setup_two_factor: 'Setup 2 Factor',
  settings_button_unlock_settings: 'Tap to Unlock Account Settings',
  settings_button_use_touchID: 'Use TouchID',
  settings_days: 'Day(s)',
  settings_denominations_title: 'Denominations',
  settings_hours: 'Hour(s)',
  settings_minutes: 'Minute(s)',
  settings_modal_send_logs_title: 'Send logs?',
  settings_modal_send_logs_loading: 'Sending logs is in progress',
  settings_modal_send_logs_success: 'Logs have been sent',
  settings_modal_send_logs_failure: 'Sending logs has failed',
  settings_options_title_cap: 'Options',
  settings_seconds: 'Second(s)',
  settings_select_currency: 'Select a currency',
  settings_title_auto_logoff: 'Auto Log Off After',
  settings_title_currency: 'Default Currency',
  settings_title_pin_login: 'PIN Re-login',
  settings_title: 'Settings',
  settings_alert_unlock: 'Please unlock your account settings',
  string_cancel_cap: 'Cancel',
  string_cancel: 'CANCEL',
  string_delete: 'Delete',
  string_custom_fee: 'Set Fees',
  satPerByte: 'Satoshi Per Byte',
  gasLimit: 'Gas Limit',
  gasPrice: 'Gas Price (Gwei)',
  string_disable: 'DISABLE',
  string_done_cap: 'Done',
  string_fee_with_colon: 'Fee: ',
  string_first_ethereum_wallet_name: 'My Ether',
  string_first_bitcoin_wallet_name: 'My Bitcoin',
  my_crypto_wallet_name: 'My %s',

  // Exchange
  string_from_exchange_info: 'You are about to exchange\n %1$s %2$s\n (%3$s)\n from %4$s',
  string_help: 'Help',
  string_next: 'NEXT',
  string_next_capitalized: 'Next',
  string_no_name: 'No name',
  string_ok: 'OK',
  string_paste_address: 'Paste %1$s',
  string_rename: 'Rename',
  string_resync: 'Resync',
  string_split: 'Split',
  string_get_seed: 'Get Seed',
  string_save: 'Save',
  string_share: 'Share',
  string_show_balance: 'Show Balance',
  string_to_exchange_info: 'and deposit %1$s %2$s\n to %3$s',
  exchange_notes_metadata: 'Exchanged %1$s %2$s from %3$s to %4$s %5$s in %6$s. \n\nFor assistance, please contact support@shapeshift.io.',
  title_add_tokens: 'Add Tokens',
  title_create_wallet_select_crypto: 'Select Type',
  title_create_wallet_select_fiat: 'Select Fiat',
  title_back: 'Back',
  title_bitcoin_settings: 'Bitcoin Settings',
  title_bitcoinCash_settings: 'Bitcoin Cash Settings',
  title_change_mining_fee: 'Change Mining Fee',
  title_change_password: 'Change Password',
  title_change_pin: 'Change Pin',
  title_confirm_exchange: 'Confirm exchange',
  title_create_wallet: 'Create Wallet',
  title_default_fiat: 'Default Fiat',
  title_edge_login: 'Edge Login',
  title_ethereum_settings: 'Ethereum Settings',
  title_exchange: 'Exchange',
  title_litecoin_settings: 'Litecoin Settings',
  title_manage_tokens: 'Manage Tokens',
  title_edit_token: 'Edit Token',
  title_add_token: 'Add Token',
  title_password_recovery: 'Password Recovery',
  title_otp: '2 Factor Authentication',
  title_request: 'Request',
  title_send_confirmation: 'Send Confirmation',
  title_send: 'Send',
  title_settings: 'Settings',
  title_transaction_details: 'Transaction Details',
  title_transactions: 'Transactions',
  title_wallets: 'Wallets',
  token_not_supported: 'Token is not supported by exchange',
  amount_above_limit: 'Transaction amount is above the max limit of %1$s',
  amount_below_limit: 'Transaction amount is below the min limit of %1$s',
  transaction_details_category_title: 'Category',
  transaction_details_payee: 'Payee',
  transaction_details_view_advanced_data: 'View advanced transaction data',
  string_fee_with_brackets: '(Fee)',
  title_Header: 'Header',
  back_button_text: 'Back',
  back_button_tap_again_to_exit: 'Please tap BACK again to exit app',
  send_confirmation_enter_send_password: 'Password',
  tx_detail_picker_title: 'Please choose a category:',
  transaction_detail_no_wallet: 'No wallet on transaction object',
  transaction_detail_unable_to_load_transaction: 'Unable to load transaction',
  string_confirm: 'Confirm',
  fragment_tx_detail_mining_fee: '+ %f (Fee)',
  transaction_details_notes_title: 'Notes',
  string_search: 'Search',
  confirm_password_text: 'Confirm Password',
  // OTP
  title_otp_enabled: '2FA is enabled',
  title_otp_disabled: 'Protect your account with 2FA',
  otp_description:
    '2FA prevents unauthorized access from other devices, even if your username and password is compromised. You can scan a QR code or type in an authentication code to seamlessly authorize other devices',
  otp_enabled_description: 'You can scan a QR code or type in the authentication code to seamlessly authorize other devices.',
  otp_show_code: 'Show authentication code',
  otp_hide_code: 'Hide authentication code',
  otp_disable: 'Disable 2FA',
  otp_keep: 'KEEP 2FA',
  otp_enable: 'Enable 2FA',
  otp_enabled_modal_part_one: '2FA has been enabled. A unique authentication code will be generated.',
  otp_enabled_modal_part_two:
    'If you lose your phone or uninstall the app, it will take 7 days to disable 2FA and access your account from another device without the authentication code.',
  otp_disabled_modal: '2FA has been disabled. You can enable it again by tapping on "Enable 2FA" at any time.',
  otp_modal_headline: 'Are you sure you want to disable 2FA?',
  otp_modal_reset_headline: '2FA Reset Requested',
  otp_modal_reset_description: 'An attempt to login to your account was made by another device and a 2FA reset has been requested. \n\nIf you did not make the request, click "Keep 2FA". Then go to the "Settings" and change your password and PIN. \n\nIf you did request the reset, \nclick on "Disable 2FA".',
  otp_modal_body: '2FA is recommended to keep your device secure from unauthorized access from other devices.',
  otp_notif_title: '2FA disable has been requested by another device',
  otp_notif_body: 'If you did not create this request, log in as %1$s and change your password',

  word_to_in_convert_from_to_string: 'to'
}

export default strings
