<?php

namespace QuadLayers\QLTGM\Controllers;

class Contact extends Base {

	protected static $instance;

	private function __construct() {
		add_action( 'wp_ajax_qltgm_add_contact', array( $this, 'ajax_add_contact' ) );
		add_action( 'wp_ajax_qltgm_edit_contact', array( $this, 'ajax_edit_contact' ) );
		add_action( 'wp_ajax_qltgm_save_contact', array( $this, 'ajax_save_contact' ) );
		add_action( 'wp_ajax_qltgm_delete_contact', array( $this, 'ajax_delete_contact' ) );
		add_action( 'wp_ajax_qltgm_save_contact_order', array( $this, 'ajax_save_contact_order' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_js' ), 99 );
		add_action( 'admin_menu', array( $this, 'add_menu' ) );
	}

	function add_menu() {
		add_submenu_page( QLTGM_DOMAIN, esc_html__( 'Contacts', 'quadlayers-telegram-chat' ), esc_html__( 'Contacts', 'quadlayers-telegram-chat' ), 'manage_options', QLTGM_DOMAIN . '_contacts', array( $this, 'add_panel' ) );
	}

	function add_panel() {
		global $submenu;
		$contact_model      = new \QuadLayers\QLTGM\Models\Contact();
		$contact_visibility = new \QuadLayers\QLTGM\Models\Display_Component();
		$contacts           = $contact_model->get_contacts_reorder();

		$contact_args       = $contact_model->get_args();
		$contact_entries    = $contact_visibility->get_entries();
		$contact_taxonomies = $contact_visibility->get_taxonomies();
		include QLTGM_PLUGIN_DIR . 'lib/view/backend/pages/parts/header.php';
		include QLTGM_PLUGIN_DIR . 'lib/view/backend/pages/contacts.php';
	}

	function get_contact( $contact_id ) {
		$contact_model = new \QuadLayers\QLTGM\Models\Contact();
		$contact       = $contact_model->get_contact( $contact_id );

		foreach ( $contact['display']['entries'] as $key => $value ) {
			$_entries_titles = array();
			foreach ( (array) $value['ids'] as $id ) {
				if ( $id == 'all' ) {
					$_entries_titles[ $id ] = esc_html__( 'All', 'quadlayers-telegram-chat' );
					continue;
				}
				if ( $title = get_the_title( absint( $id ) ) ) {
					$_entries_titles[ $id ] = $title;
				}
			}
			$contact['display']['entries'][ $key ]['ids'] = $_entries_titles;
		}

		foreach ( $contact['display']['taxonomies'] as $key => $value ) {
			$_taxonomies_titles = array();
			foreach ( $value['ids'] as $id ) {

				if ( $id == 'all' ) {
					$_taxonomies_titles[ $id ] = esc_html__( 'All', 'quadlayers-telegram-chat' );
					continue;
				}
				if ( $term = get_term_by( 'id', absint( $id ), $key ) ) {
					$_taxonomies_titles[ $id ] = $term->name;
				}
			}

			$contact['display']['taxonomies'][ $key ]['ids'] = $_taxonomies_titles;
		}

		return $contact;
	}

	function ajax_edit_contact() {
		if ( check_ajax_referer( 'qltgm_edit_contact', 'nonce', false ) ) {
			$contact_id = ( isset( $_REQUEST['contact_id'] ) ) ? absint( $_REQUEST['contact_id'] ) : -1;
			if ( $contact_id != -1 ) {
				$contact = $this->get_contact( $contact_id );
				if ( $contact ) {
					return parent::success_ajax( $contact );
				}
			} else {
				return parent::success_ajax( -1 );
			}
			// parent::error_reload_page();
		}
		parent::error_access_denied();
	}

	function ajax_save_contact() {

		if ( current_user_can( 'manage_options' ) ) {
			if ( check_ajax_referer( 'qltgm_save_contact', 'nonce', false ) && isset( $_REQUEST['contact_data'] ) ) {
				$contact_data = array();
				parse_str( $_REQUEST['contact_data'], $contact_data );
				$contact_model = new \QuadLayers\QLTGM\Models\Contact();
				if ( is_array( $contact_data ) ) {
					if ( isset( $contact_data['id'] ) ) {
						return parent::success_save( $contact_model->update_contact( $contact_data ) );
					} else {
						return parent::success_save( $contact_model->add_contact( $contact_data ) );
					}
					return parent::error_reload_page();
				}
			}
			return parent::error_access_denied();
		}
	}

	function ajax_save_contact_order() {
		if ( current_user_can( 'manage_options' ) ) {
			if ( check_ajax_referer( 'qltgm_save_contact_order', 'nonce', false ) && isset( $_REQUEST['contact_data'] ) ) {
				if ( array_key_exists( 'contact_data', $_REQUEST ) ) {
					$contact_model = new \QuadLayers\QLTGM\Models\Contact();
					$contacts      = $contact_model->get_contacts();
					$contact_order = array();
					parse_str( $_REQUEST['contact_data'], $contact_order );
					$contacts_id = $contact_order['contact_id'];
					$result      = -1;
					if ( is_array( $contacts_id ) && count( $contacts_id ) > 0 ) {
						$loop = 1;
						foreach ( $contacts_id as $contact_id ) {
							if ( isset( $contacts[ $contact_id ] ) ) {
								$contacts[ $contact_id ]['order'] = $loop;
								++$loop;
							}
						}
						$result = $contact_model->update_contacts( $contacts );
					}
				}
			}
			return wp_send_json_success( $result );
		}
	}

	function ajax_delete_contact() {

		if ( check_ajax_referer( 'qltgm_delete_contact', 'nonce_delete', false ) ) {

			$contact_id = ( isset( $_REQUEST['contact_id'] ) ) ? absint( $_REQUEST['contact_id'] ) : -1;

			$contact_model = new \QuadLayers\QLTGM\Models\Contact();

			$contact = $contact_model->delete( $contact_id );
			if ( $contact_id ) {

				return parent::success_ajax( $contact );
			}
			parent::error_reload_page();
		}
		parent::error_access_denied();
	}

	function add_js() {
		if ( isset( $_GET['page'] ) && ( $_GET['page'] === 'qltgm_contacts' ) ) {
			$contact_model = new \QuadLayers\QLTGM\Models\Contact();
			wp_enqueue_media();
			wp_localize_script(
				'qltgm-admin',
				'qltgm_contact',
				array(
					'nonce'   => array(
						'qltgm_get_contact'        => wp_create_nonce( 'qltgm_get_contact' ),
						'qltgm_edit_contact'       => wp_create_nonce( 'qltgm_edit_contact' ),
						'qltgm_add_contact'        => wp_create_nonce( 'qltgm_add_contact' ),
						'qltgm_save_contact'       => wp_create_nonce( 'qltgm_save_contact' ),
						'qltgm_save_contact_order' => wp_create_nonce( 'qltgm_save_contact_order' ),
					),
					'message' => array(
						'contact_confirm_delete'       => 'you want to delete the contact',
						'contact_confirm_delete_title' => 'Contact: confirmation',
					),
					'args'    => $contact_model->get_args(),
				)
			);
		}
	}

	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}
