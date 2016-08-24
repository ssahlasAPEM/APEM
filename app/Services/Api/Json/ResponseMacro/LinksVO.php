<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:20 PM
 */

use app\Core\Shared\CollectionMeta;

/**
 * Class LinksVO
 * @package app\Services\Api\Json\ResponseMacro
 */
class LinksVO
{

    public $prev = null;
    public $next = null;
    public $last = null;
    public $self = null;
    public $first = null;

    private $extra = '';

    /**
     * For Pagination:
     * Sets all the links for Pagination
     *
     * @param CollectionMeta $meta
     */
    public function __construct(CollectionMeta $meta = null)
    {
        if (!is_null($meta)) {
            $this->setPrevLink($meta);
            $this->setNextLink($meta);
            $this->setLastLink($meta);
            $this->setSelfLink($meta);
            $this->setFirstLink($meta);
        }
    }

    /**
     * For Pagination:
     * Sets the "Previous" Link
     *
     * @param CollectionMeta $meta
     */
    private function setPrevLink(CollectionMeta $meta)
    {
        $page  = $meta->getPage();
        $limit = $meta->getLimit();

        if ($page > 1) {
            $prev       = $page - 1;
            $this->prev = request()->url() . "?page=" . $prev . "&per_page=" . $limit . $this->extra;
        }
    }

    /**
     * For Pagination:
     * Sets the "Next" Link
     *
     * @param CollectionMeta $meta
     */
    private function setNextLink(CollectionMeta $meta)
    {
        $page       = $meta->getPage();
        $limit      = $meta->getLimit();
        $totalPages = $meta->getTotalPages();

        if ($page < $totalPages) {
            $next       = $page + 1;
            $this->next = request()->url() . "?page=" . $next . "&per_page=" . $limit . $this->extra;
        }
    }

    /**
     * For Pagination:
     * Sets the "Last" Link
     *
     * @param CollectionMeta $meta
     */
    private function setLastLink(CollectionMeta $meta)
    {
        $limit      = $meta->getLimit();
        $totalPages = $meta->getTotalPages();

        if ($totalPages > 1) {
            $this->last = request()->url() . "?page=" . $totalPages . "&per_page=" . $limit . $this->extra;
        }
    }

    /**
     * For Pagination:
     * Sets the "Self" Link
     *
     * @param CollectionMeta $meta
     */
    private function setSelfLink(CollectionMeta $meta)
    {
        $page       = $meta->getPage();
        $limit      = $meta->getLimit();
        $totalPages = $meta->getTotalPages();

        if ($totalPages > 1) {
            $this->self = request()->url() . "?page=" . $page . "&per_page=" . $limit . $this->extra;
        }
    }

    /**
     * For Pagination:
     * Sets the "First" Link
     *
     * @param CollectionMeta $meta
     */
    private function setFirstLink(CollectionMeta $meta)
    {
        $limit      = $meta->getLimit();
        $totalPages = $meta->getTotalPages();

        if ($totalPages > 1) {
            $this->first = request()->url() . "?page=1&per_page=" . $limit . $this->extra;
        }
    }
}
